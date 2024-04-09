import { useContext } from "react";
import { Profile } from "../";
import { Context } from "../../context";

const HomeSide = () => {
    const { state } = useContext(Context);

    const users = state.users;

    return (
        <div className="sm:w-[465px] h-screen overflow-auto dark:bg-dark-2 bg-light-2 dark:text-light-1 text-dark-1 fixed top-0 right-0 pb-[70px]">
            <div className="px-6 pt-12">
                <h3 className="font-bold text-2xl mb-[40px] sticky top-0 fade-up">
                    Top Creators
                </h3>
                <div className="grid sm:grid-cols-[repeat(2,_1fr)] grid-cols-[repeat(1,_1fr)] gap-6">
                    {users.map(
                        (user, index) =>
                            index < 8 && (
                                <Profile
                                    key={user.id}
                                    img={user.pic}
                                    name={
                                        user?.name +
                                        (user.surname != undefined
                                            ? ` ${user.surname}`
                                            : "")
                                    }
                                    text="Followed by usmonjon"
                                />
                            ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeSide;
