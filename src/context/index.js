import { createContext, useReducer } from "react";

const initialValue = {
    navbarToggle: false,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ON_NAVBAR_TOGGLE":
            return { ...state, navbarToggle: payload };
        default:
            return { state };
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
