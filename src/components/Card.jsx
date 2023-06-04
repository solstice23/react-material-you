import classNames from 'classnames';
import { useRipple } from './Ripple.jsx';
import css from './Card.module.scss';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';

function Card(props) {
	const container = useRipple();
	const themeClass = useScopedThemeClass();

	return (
		<div ref={container}
			className={classNames(
				css.card,
				themeClass,
				props.className,
				{
					[css.elevated]: (props.type ?? 'filled') === 'elevated',
					[css.filled]: (props.type ?? 'filled') === 'filled',
					[css.outlined]: (props.type ?? 'filled') === 'outlined',
				},
				{
					[css.noRipple]: props.ripple === false,
					[css.noLayer]: props.layer === false,
				}
			)}
			onClick={props.onClick}
			onDoubleClick={props.onDoubleClick}
		>
			{props.children}
		</div>
	)
}

export default Card;