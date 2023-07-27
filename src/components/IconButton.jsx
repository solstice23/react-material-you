import classNames from 'classnames';
import { useRipple } from './Ripple.jsx';
import css from './IconButton.module.scss';
import { forwardRef, useRef } from 'react';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';


const IconButton = forwardRef(function IconButton(props, ref) {
	const themeClass = useScopedThemeClass();

	if (!ref) ref = useRef(null);
	useRipple(ref);

	return (
		<div ref={ref} role="button"
			className={classNames(
				'iconButton',
				css.iconButton,
				themeClass,
				props.className,
				{
					[css.standard]: (props.type ?? 'standard') === 'standard',
					[css.filled]: (props.type ?? 'standard') === 'filled',
					[css.outlined]: (props.type ?? 'standard') === 'outlined',
					[css.tonal]: (props.type ?? 'standard') === 'tonal',
				},
				{
					[css.toggle]: props.selected !== undefined || props.toggle,
					[css.selected]: props.selected
				},
				{
					[css.disabled]: props.disabled
				}
			)}
			title={props.title}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	)
});

export default IconButton;