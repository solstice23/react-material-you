import { useContext } from "react";
import ThemeContext from '../contexts/ThemeContext';
import { css } from '@emotion/css'

function useScopedThemeTokens() {
	const themeContext = useContext(ThemeContext);
	const tokens = themeContext.tokens;
	return css`
		${tokens.map(({token, rgb: [r, g, b]}) => {
			return `${token}: rgb(${r}, ${g}, ${b}); ${token}-rgb: ${r}, ${g}, ${b};`;
		}).join('\n')}
	`;
}

export default useScopedThemeTokens;