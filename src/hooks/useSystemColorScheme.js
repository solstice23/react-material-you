import { useSyncExternalStore } from 'react';

function useSystemColorScheme() {
	const systemColorScheme = useSyncExternalStore(subscribe, getSnapshot);
	return systemColorScheme;
}

function subscribe(callback) {
	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	mediaQuery.addEventListener('change', callback);
	return () => {
		mediaQuery.removeEventListener('change', callback);
	};
}

function getSnapshot() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default useSystemColorScheme;