import React, { useContext, useState } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {


    // for open side bar and model bar

    const [isSidebarOpen, setIsSideOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);


    // for open and close sidebar
    const openSidebar = () => {
        setIsSideOpen(true);
    }
    const closeSidebar = () => {
        setIsSideOpen(false);
    }

    // for open and close model
    const openModel = () => {
        setIsModelOpen(true);
    }
    const closeModel = () => {
        setIsModelOpen(false);
    }


    return (
        <AppContext.Provider value={{
            isModelOpen,
            isSidebarOpen,
            openModel,
            openSidebar,
            closeModel,
            closeSidebar,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

// custom hook second method of context

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider }