import { useState, useRef, useEffect } from 'react';
type RefStateStorage<T> = [T, React.MutableRefObject<T>, (data: T) => void];
function useRefStateStorage<T>(key: string, defaultState: T): RefStateStorage<T> {
	let [state, _setState] = useState(() => {
		const storageState = localStorage.getItem(key);
		return storageState ? JSON.parse(storageState) : defaultState;
	});
	const stateRef = useRef(state);
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(stateRef.current));
	}, [state]);
	const setState = (newState: T) => {
		stateRef.current = newState;
		_setState(newState);
	};
	return [state, stateRef, setState];
}
export default useRefStateStorage;