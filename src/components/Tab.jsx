import classNames from 'classnames';
import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import css from './Tabs.module.scss';
import useScopedThemeClass from '../hooks/useScopedThemeClass.js';

const Tab = forwardRef(function Tab(props, ref) {
	if (ref === null) ref = useRef();

	return (
		<div className={
			classNames(
				css.tab,
				props.className,
			)
		}
		ref={ref}>
			test
		</div>
	)
});


export default Tab;