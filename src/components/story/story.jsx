import { Link } from "react-router-dom";

const Story = ({ user, isCurrentUser = false }) => {
    const { name, pic } = user;
    return (
        <Link
            to={`/story/${user.username}/${
                user.stories[user.stories.length - 1].id
            }`}
            className="flex flex-col justify-between items-center w-[86px] h-[94px] p-[0px_3px] relative active:scale-95"
        >
            <div className="story w-[72px] h-[72px] bg-gradient rounded-full flex justify-center items-center">
                <div
                    className="w-[61.091px] h-[61.091px] bg-center bg-cover bg-no-repeat rounded-full ring-[2.5px] ring-dark-1"
                    style={{
                        backgroundImage: `url('${pic}')`,
                    }}
                ></div>
            </div>
            <span className="text-[12px] font-semibold leading-4">
                {name.length > 9 ? name.slice(0, 8) + "..." : name}
            </span>
            <svg
                className={`absolute bottom-[24px] right-[1.5px] ${
                    !isCurrentUser && "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <g clipPath="url(#clip0_1_242)">
                    <path
                        d="M1.3335 8.00016C1.3335 4.85747 1.3335 3.28612 2.30981 2.30981C3.28612 1.3335 4.85747 1.3335 8.00016 1.3335C11.1429 1.3335 12.7142 1.3335 13.6905 2.30981C14.6668 3.28612 14.6668 4.85747 14.6668 8.00016C14.6668 11.1429 14.6668 12.7142 13.6905 13.6905C12.7142 14.6668 11.1429 14.6668 8.00016 14.6668C4.85747 14.6668 3.28612 14.6668 2.30981 13.6905C1.3335 12.7142 1.3335 11.1429 1.3335 8.00016Z"
                        stroke="#877EFF"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M10 8.00002L8 8.00002M8 8.00002L6 8.00002M8 8.00002L8 6M8 8.00002L8 10"
                        stroke="#877EFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_242">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </Link>
    );
};

export default Story;
