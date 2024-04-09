import { useContext, useEffect } from "react";
import { Sidebar, Main } from "../";
import { Context } from "../../context";

const App = () => {
    return (
        <>
            <Sidebar />
            <Main />
        </>
    );
};

export default App;
