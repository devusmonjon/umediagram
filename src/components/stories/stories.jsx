import { Story } from "../";

const Stories = ({ users }) => {
    return (
        <div className="relative">
            <div className="stories w-full h-[96px] overflow-x-auto flex justify-start items-center gap-[9px]">
                {users.map((user, id) => (
                    <div key={user.id} className="w-[86px]">
                        <Story user={user} isCurrentUser={id == 0}></Story>
                    </div>
                ))}
                <div className="w-[48px] h-[96px]">
                    <div className="w-[48px] h-[96px]"></div>
                </div>
            </div>
            <div className="absolute right-0 top-0 dark:bg-dark-1 bg-light-1 w-[48px] h-[96px] flex items-center justify-center">
                <button
                    id="arrow-left"
                    className="rounded-[22px] p-[10px] bg-[#1D1D22] shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.25)]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                    >
                        <path
                            d="M4.72926 11.6669C4.72926 11.5502 4.75843 11.4336 4.84593 11.3461L9.22093 7.00023L4.84593 2.65439C4.67093 2.47939 4.67093 2.21689 4.84593 2.04189C5.02093 1.86689 5.28343 1.86689 5.45843 2.04189L10.1251 6.70856C10.3001 6.88356 10.3001 7.14606 10.1251 7.32106L5.45843 11.9877C5.28343 12.1627 5.02093 12.1627 4.84593 11.9877C4.75843 11.9002 4.72926 11.7836 4.72926 11.6669Z"
                            fill="#877EFF"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Stories;
