import React, { useState, createContext } from "react";
//const MyUserContext = createContext();
import MyUserContext from '../context/userContext'

export const MyUserContextProvider = (props) => {
    const [userName, setUser] = useState(0);
    return (
        <MyUserContext.Provider value={{ userName, setUser }}>
            {props.children}
        </MyUserContext.Provider>
    )
}

//export default MyUserContext;