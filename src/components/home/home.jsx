import { useContext } from "react";
import { HomeSide, Stories } from "../";
import { Context } from "../../context";

const Home = () => {
    const { state } = useContext(Context);

    const users = state.users;

    return (
        <section id="home">
            <div className="min-h-screen w-[calc(100%_-_460px)] dark:bg-dark-1 bg-light-1 dark:text-light-1 text-dark-1 p-[59px_52px]">
                <div className="container">
                    <Stories users={users} />
                </div>
            </div>
            <HomeSide />
        </section>
    );
};

export default Home;
