import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useRipple } from './Ripple.jsx';
import css from './Tabs.module.scss';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';

const Tabs = forwardRef(function Tabs(props, ref) {
	const themeClass = useScopedThemeClass();

	if (ref === null) ref = useRef();

	const [currentTab, setCurrentTab] = useState(props?.currentTab ?? 0);

	useEffect(() => {
		if (props?.currentTab !== undefined) {
			setCurrentTab(props.currentTab);
		}
	}, [props.currentTab]);

	const tabsRef = useRef(null);
	const tabContentsRef = useRef(null);

	useLayoutEffect(() => {
		if (!(props?.dynamicHeight ?? true)) return;
		if (tabContentsRef.current === null) return;
		const currentTabContentDom = tabContentsRef.current.children[currentTab];
		const height = currentTabContentDom.getBoundingClientRect().height;
		tabContentsRef.current.style.height = height + 'px';
	}, [currentTab, props.dynamicHeight]);

	useEffect(() => {
		if (!tabsRef.current) return;
		const currentTabDom = tabsRef.current.children[currentTab];
		console.log(currentTabDom);
		const innerDom = currentTabDom.querySelector(`.${css.tabInner}`);
		const width = innerDom.getBoundingClientRect().width;
		ref.current.style.setProperty('--current-tab-inner-width', width + 'px');
		console.log(width);		
	},[currentTab, props.children]);

	return (
		<div
			className={
				classNames(
					css.tabs,
					themeClass,
					props.className,
					{
						[css.primary]: (props.type ?? 'primary') === 'primary',
						[css.secondary]: (props.type ?? 'primary') === 'secondary',

						[css.withIcon]: props.children.some(child => child.props.icon)
					}
				)
			}
			style={{
				'--current-tab': currentTab,
				'--tabs-count': props.children.length
			}}
			ref={ref}
		>
			<div className={css.tabBar} ref={tabsRef}>
				{
					props.children.map((child, i) => {
						return (
							<TabItem
								key={i}
								label={child.props.label}
								icon={child.props.icon}
								className={
									classNames(
										child.props.className,
										{
											[css.current]: currentTab === i
										}
									)
								}
								onClick={() => {
									setCurrentTab(i);
									props.onTabChange?.(i);
								}}
							/>
						)
					})
				}
				<div className={css.indicator}/>
			</div>
			<div className={css.tabContents} ref={tabContentsRef}>
				{
					props.children.map((child, i) => {
						return (
							<TabContentItem
								key={i}
								className={child.props.className}
								tabId={i}
							>
								{child.props.children}
							</TabContentItem>
						)
					})
				}
			</div>
		</div>
	)
});


export default Tabs;

const TabItem = function (props) {
	const ref = useRipple();
	return (
		<div
			className={
				classNames(
					css.tab,
					'tab',
					props.className,
				)
			}
			ref={ref}
			onClick={() => {
				props.onClick();
			}}
			style={{
				'--tab-id': props.tabId,
			}}
		>
			<div className={css.tabInner}>
				{
					props.icon &&
					<div className={css.tabIcon}>
						{props.icon}
					</div>
				}
				<div className={css.tabLabel}>
					{props.label}
				</div>
			</div>
		</div>
	);
}

const TabContentItem = function (props) {
	return (
		<div className={
			classNames(
				css.tabContent,
				'tab-content',
				props.className,
			)
		}
		style={{
			'--tab-id': props.tabId,
		}}>
			{props.children}
		</div>
	)
}