import React from "react";
import { LightColors, DarkColors } from "../variables/variables";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [DarkMode, setDarkMode] = React.useState(false);
    const [colors, setColors] = React.useState(LightColors);

    return (
        <GlobalContext.Provider value={{
            colors,
            DarkMode,
            setColors,
            setDarkMode,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const Global = () => {
    return React.useContext(GlobalContext);
}