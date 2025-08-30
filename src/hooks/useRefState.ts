import { useState, useRef, useEffect } from 'react';
type RefState<T> = [T, React.MutableRefObject<T>, (data: T) => void];
function useRefState<T>(initialState: T): RefState<T> {
	let [state, _setState] = useState(initialState);
	const stateRef = useRef(state);
	const setState = (data: T) => {
		stateRef.current = data;
		_setState(data);
	};
	return [state, stateRef, setState];
}
export default useRefState;