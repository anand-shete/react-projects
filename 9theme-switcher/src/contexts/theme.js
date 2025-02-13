import { createContext, useContext } from 'react'

// data to be passed every where on each component comes inside context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider;

// custom hook instead of importing ThemeContext with ThemeProvider in every file
export default function useTheme() {
    return useContext(ThemeContext)
}