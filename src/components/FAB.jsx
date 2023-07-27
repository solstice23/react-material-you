import classNames from 'classnames';
import { useRipple } from './Ripple.jsx';
import css from './FAB.module.scss';
import { forwardRef, useRef } from 'react';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';

const FAB = forwardRef(function FAB(props, ref) {
	const themeClass = useScopedThemeClass();

	if (!ref) ref = useRef(null);
	useRipple(ref);

	return (
		<button ref={ref}
			className={classNames(
				css.FAB,
				themeClass,
				props.className,
				{
					[css.sizeNormal]: (props.size ?? 'normal') === 'normal',
					[css.sizeSmall]: (props.size ?? 'normal') === 'small',
					[css.sizeLarge]: (props.size ?? 'normal') === 'large'
				},
				{
					[css.colorPrimary]: (props.color ?? 'primary') === 'primary',
					[css.colorSurface]: (props.color ?? 'primary') === 'surface',
					[css.colorSurfaceLowered]: (props.color ?? 'primary') === 'surface_lowered',
					[css.colorSecondary]: (props.color ?? 'primary') === 'secondary',
					[css.colorTertiary]: (props.color ?? 'primary') === 'tertiary',
				},
				{
					[css.elevationDefault]: (props.elevation ?? 'default') === 'default',
					[css.elevationLowered]: (props.elevation ?? 'default') === 'lowered',
					[css.elevationNone]: (props.elevation ?? 'default') === 'none',
				}
			)}
			title={props.title}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
});

export default FAB;