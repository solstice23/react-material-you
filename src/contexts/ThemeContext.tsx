import { createContext } from "react";

type ThemeContextType = {
	scopedThemeClass: string;
	setScopedThemeClass: (themeClass: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;