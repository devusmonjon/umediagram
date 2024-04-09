import { useParams } from "react-router";
import { Home } from "..";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

const StoryView = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);

    const params = useParams();

    const { state } = useContext(Context);

    const users = state.users;

    useEffect(() => {
        setCurrentUser(users.filter((user) => user.username === params.slug));
        currentUser[0]?.stories?.map((story) => {
            console.log(story.id);
            console.log(params.id);
        });
    }, [params]);

    useEffect(() => {
        setIsModalActive(true);
    }, [params]);
    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            setIsModalActive(false);
        }
    });
    return (
        <>
            <Home />
            <div
                className={`modal w-full h-screen flex justify-center items-center overflow-hidden bg-[#101012CC] fixed z-[2] top-0 left-0 cursor-pointer ${
                    isModalActive ? "block" : "hidden"
                }`}
            >
                <div className="w-[527px] h-[591px] flex justify-center">
                    <div className="w-[333px] h-full rounded-[15px] focus:ring-2 ring-primary outline-none ring-offset-2 ring-offset-[#101012CC] overflow-hidden">
                        <img
                            src={
                                currentUser[0]?.stories?.filter(
                                    (story) => story.id == params.id,
                                )[0]?.source
                            }
                        />
                    </div>
                </div>
                <button
                    onClick={() => setIsModalActive(false)}
                    className="fixed top-[60px] right-[60px]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M41.2861 6.71387L24.0001 23.9999L6.70605 41.2939"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M41.298 41.298L6.70801 6.70801"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default StoryView;
