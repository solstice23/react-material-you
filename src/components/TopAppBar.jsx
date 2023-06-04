import css from './TopAppBar.module.scss'
import useScrolled from '../hooks/useScrolled.js';
import classNames from 'classnames';

function TopAppBar({
	leftButtons = null,
	rightButtons = null,
	type = 'small',
	scrolled = null,
	children
}) {
	console.log(css);
	const autoScrolled = useScrolled();
	const currentScrolled = scrolled != null ? scrolled : autoScrolled;
	return (
		<>
			<div className={classNames(
				'topAppBar',
				css.topAppBar,
				{
					[css.scrolled]: currentScrolled,
					[css.topAppBarSmall]: type === 'small',
					[css.topAppBarMedium]: type === 'medium',
					[css.topAppBarLarge]: type === 'large',
					[css.topAppBarCenter]: type === 'center',
				}
			)}>
				{
					leftButtons && 
					<div className={css.leftButtons}>
						{
							leftButtons
						}
					</div>
				}
				<div className={css.title}>
					{children}
				</div>
				{
					rightButtons &&
					<div className={css.rightButtons}>
						{
							rightButtons
						}
					</div>
				}
			</div>
			{
				(type === 'medium' || type === 'large') &&
				<div className={classNames(
					'topAppBarHeadline',
					css.topAppBarHeadline,
					{
						[css.scrolled]: currentScrolled,
						[css.topAppBarHeadlineMedium]: type === 'medium',
						[css.topAppBarHeadlineLarge]: type === 'large',
					}
				)}>
					<span>{children}</span>
				</div>
			}
		</>
	)
}
export default TopAppBar;