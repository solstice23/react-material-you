import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState } from 'react';
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
	
	const tabContentsRef = useRef(null);

	useEffect(() => {
		if (!(props?.dynamicHeight ?? true)) return;
		if (tabContentsRef.current === null) return;
		const currentTabDom = tabContentsRef.current.children[currentTab];
		const height = currentTabDom.getBoundingClientRect().height;
		tabContentsRef.current.style.height = height + 'px';
	}, [currentTab, props.dynamicHeight]);

	return (
		<div
			className={
				classNames(
					css.tabs,
					themeClass,
					props.className,
				)
			}
			style={{
				'--current-tab': currentTab,
			}}
			ref={ref}
		>
			<div className={css.tabBar}>
				{
					props.children.map((child, i) => {
						return (
							<TabItem
								key={i}
								label={child.props.label}
								className={child.props.className}
								onClick={() => {
									setCurrentTab(i);
									props.onTabChange?.(i);
								}}
							/>
						)
					})
				}
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
			{props.label}
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