import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null);


const ThemeProvider = ({children }: any)=> {
    const [mode, setMode] = useState('light');

    return (
        <ThemeContext.Provider
            value={{
                mode,
                setMode: () => setMode(mode === 'dark' ? 'light' : 'dark')
            }}
        >

            {children}
        </ThemeContext.Provider>
    );
}


export default ThemeProvider;