"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getThemeFromLocalStorage = () => {
    // ! Next.js has server-side rendering (SSR), but localStorage is only available on the client-side.
    // ? To avoid errors during the transition from SSR to client-side rendering (CSR),
    // ? we check if the code is running in the browser before accessing localStorage.
    // if(typeof window !== "undefined") {
    //     const value = localStorage.getItem("theme");
    //     return value || "light";   
    // }
    let value
    if (typeof window !== "undefined") {
        value = localStorage.getItem("theme");
    }
    return value || "light";
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getThemeFromLocalStorage();
    });
    // const [theme, setTheme] = useState("light");
    // useEffect(() => {
    //     // const storedTheme = getThemeFromLocalStorage();
    //     const storedTheme = localStorage.getItem("theme") || "light";
    //     setTheme(storedTheme);
    // }, []);
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}