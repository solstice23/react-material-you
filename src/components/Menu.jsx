import classNames from 'classnames';
import Popper from './Popper.jsx';
import css from './Menu.module.scss';
import './Menu.animations.scss';
import { forwardRef, useEffect, useRef } from 'react';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';

const Menu = forwardRef(function Menu(props, ref) {
	const themeClass = useScopedThemeClass();

	if (ref === null) ref = useRef();
	return (
		<Popper
			anchorElement={props.anchorElement}
			anchorPosition={props.anchorPosition ?? 'left top'}
			relativeToElement={props.relativeToElement}
			fixed={props.fixed}
			noClick={!(props.open ?? true)}
			ref={ref}
		>
			<div 
				className={classNames(
					css.menu,
					themeClass,
					props.className,
					{
						[css.hide]: !(props.open ?? true)
					}
				)}
				onClick={e => {
					e.stopPropagation();
					props.onClose?.();
				}}
			>
				{props.children}
			</div>
		</Popper>
	)
});

export default Menu;