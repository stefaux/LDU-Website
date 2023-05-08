import useTheme
from "../hooks/useTheme";
import React, {createContext} from "react";
export const ThemeContext = createContext();

function ThemeProvider({startingTheme, children}) {
    const {theme, setTheme} = useTheme(startingTheme);

    return (<ThemeContext.Provider value={
        {setTheme, theme}
    }> {children} </ThemeContext.Provider>);
}

export {
    ThemeProvider
};
