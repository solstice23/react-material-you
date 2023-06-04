import { useContext } from "react";
import ThemeContext from '../contexts/ThemeContext';

function useScopedThemeClass() {
	const themeContext = useContext(ThemeContext);
	return themeContext?.scopedThemeClass;
}

export default useScopedThemeClass;