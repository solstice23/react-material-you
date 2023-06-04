import React, { useEffect, useLayoutEffect, useState, useRef, useMemo } from 'react';
import { css } from '@emotion/css'
import ThemeContext from '../contexts/ThemeContext';

import { argbFromHex, themeFromSourceColor, sourceColorFromImage, applyTheme, QuantizerCelebi, Score } from '@material/material-color-utilities';
import colorToInt from '../utils/colorToInt';
import calcThemeTokens from '../utils/calcThemeTokens';
import applyThemeTokensToElement from '../utils/applyThemeTokensToElement';
import useSystemColorScheme from '../hooks/useSystemColorScheme';

const ThemeProvider = ({
	themeColor = '#000000',
	customColors = [],
	mode = 'auto',
	inherit = true,
	applyToElement = null,
	children 
}) => {
	const upperTheme = React.useContext(ThemeContext);
	if (inherit && upperTheme) {
		themeColor ??= upperTheme.themeColor;
		if (upperTheme.customColors) {
			customColors = upperTheme.customColors.filter(({ name }) => !customColors.some(({ name: n }) => n === name)).concat(customColors);
		}
		mode ??= upperTheme.mode;
	}

	themeColor = colorToInt(themeColor);
	customColors = customColors.map(({ name, value, blend }) => ({ name, value: colorToInt(value), blend }));

	const systemColorScheme = useSystemColorScheme();
	const isDark = mode === 'auto' ? systemColorScheme : (mode === 'dark');

	const theme = useMemo(() => themeFromSourceColor(themeColor, customColors), [themeColor, customColors]);
	const tokens = useMemo(() => calcThemeTokens(theme, isDark), [theme, isDark]);

	if (!upperTheme) {
		applyThemeTokensToElement(tokens);
	}
	if (applyToElement) {
		applyThemeTokensToElement(tokens, applyToElement);
	}
	
	const scopedThemeClass = useMemo(() => {
		return css`
			${tokens.map(({token, rgb: [r, g, b]}) => {
				return `${token}: rgb(${r}, ${g}, ${b}); ${token}-rgb: ${r}, ${g}, ${b};`;
			}).join('\n')}
		`;
	}, [tokens]);
	
	return (
		<ThemeContext.Provider value={{ themeColor, customColors, mode, theme, tokens, scopedThemeClass }}>
			{children}
		</ThemeContext.Provider>
	)
};

export default ThemeProvider;

