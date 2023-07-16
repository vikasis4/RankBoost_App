import React from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [DarkMode, setDarkMode] = React.useState(false);

    return (
        <GlobalContext.Provider value={{
            DarkMode,
            setDarkMode,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const Global = () => {
    return React.useContext(GlobalContext);
}