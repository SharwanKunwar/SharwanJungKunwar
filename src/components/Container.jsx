import React from "react";
import { DarkModeContext } from '../context/DarkModeContext';
import { useContext } from "react";

export const Container = ({children, className}) => {

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`max-w-6xl w-full mx-auto ${isDarkMode ? 'bg-black/30 text-white' : 'bg-white text-black'} ${className}`}>
            {children}
        </div>
    )
}