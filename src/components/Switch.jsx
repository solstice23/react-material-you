import classNames from 'classnames';
import css from './Switch.module.scss';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useRipple } from './Ripple.jsx';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';


function Switch(props) {
	const themeClass = useScopedThemeClass();

	const [checked, setChecked] = useState((props.checked !== undefined ? props.checked : props.defaultChecked) || false);

	const handleRef = useRipple(null, { center: true });

	const onClick = e => {
		if (props.disabled) return;
		setChecked(!checked);
		props.onChange?.(!checked);
	}

	const currentChecked = props.checked !== undefined ? props.checked : checked;

	const animationRef = useRef(null);

	useLayoutEffect(() => {
		if (animationRef.current) {
			return;
		}
		animationRef.current = handleRef.current.animate([
			{
				left: '14px',
				width: '16px',
				height: '16px',
			},
			{
				left: '24px',
				width: '44px',
				height: '24px',
				offset: 0.4
			},
			{
				left: '34px',
				width: '24px',
				height: '24px',
			}
		], {
			duration: 260,
			easing: 'ease-in-out',
			fill: 'both',
		});
		if (currentChecked) {
			animationRef.current.currentTime = 260;
		}
	}, []);

	useLayoutEffect(() => {
		if (!animationRef.current) {
			return;
		}
		animationRef.current.playbackRate = currentChecked ? 1 : -1;
	}, [currentChecked]);


	return (
		<div
			className={classNames(
				css.switch,
				themeClass,
				props.className,
				{
					[css.checked]: currentChecked,
					[css.disabled]: props.disabled,
				}
			)}
			onClick={onClick}
		>
			<div
				className={classNames(
					css.handle,
					{
						[css.checked]: currentChecked
					}
				)}
				ref={handleRef}
				onClick={onClick}
			>
			</div>
		</div>

	)
}

export default Switch;