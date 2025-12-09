import { createContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: Theme
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
}

const initialState: ThemeProviderState = {
    theme: 'dark',
    setTheme: () => null,
    toggleTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as Theme | null
            if (storedTheme) {
                return storedTheme
            }
        }
        return defaultTheme
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.documentElement
            root.classList.remove('light', 'dark')
            root.classList.add(theme)
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    const value = {
        theme,
        setTheme,
        toggleTheme,
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}
