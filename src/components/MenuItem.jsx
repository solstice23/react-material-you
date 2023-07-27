import classNames from 'classnames';
import Checkbox from './Checkbox.jsx';
import css from './MenuItem.module.scss';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useRipple } from './Ripple.jsx';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';

const MenuItem = forwardRef(function MenuItem(props, ref) {
	const themeClass = useScopedThemeClass();
	if (!ref) ref = useRef();

	useRipple(ref);

	const [checked, setChecked] = useState(props.defaultChecked ?? false);

	const onClick = e => {
		props.onClick?.(e);
		if (props.checkbox) {
			setChecked(!checked);
			props.onChange?.(!checked);
		}
	}
	
	const currentChecked = props.checked !== undefined ? props.checked : checked;


	return (
		<div
			ref={ref} 
			className={classNames(
				css.menuItem,
				themeClass,
				props.className
			)}
			onClick={onClick}
		>
			{props.icon && <div className={css.icon}>{props.icon}</div>}
			<div className={css.content}>{props.children}</div>
			{props.checkbox && 
				<Checkbox
					checked={currentChecked}
					className={css.checkbox}
				/>
			}

		</div>
	)
});

export default MenuItem;

export function MenuDivider(props) {
	return (
		<div className={css.divider}></div>
	)
}