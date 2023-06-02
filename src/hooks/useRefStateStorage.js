import { useState, useRef, useEffect } from 'react';
const useRefStateStorage = (defaultState, key) => {
	let [state, _setState] = useState(() => {
		const storageState = localStorage.getItem(key);
		return storageState ? JSON.parse(storageState) : defaultState;
	});
	const stateRef = useRef(state);
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(stateRef.current));
	}, [state]);
	const setState = (newState) => {
		stateRef.current = newState;
		_setState(newState);
	};
	return [state, stateRef, setState];
}
export default useRefStateStorage;