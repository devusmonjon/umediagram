import { Route, Routes } from "react-router";
import { Home } from "../";

const Main = () => {
    return (
        <main className="ml-[270px]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </main>
    );
};

export default Main;
