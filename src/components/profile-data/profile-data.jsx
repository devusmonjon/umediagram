import { Link } from "react-router-dom";

const ProfileData = ({ fullName, data, classNames }) => {
    return (
        <Link
            to={"/profile"}
            className={`dark:text-light-2 text-dark-2 sm:flex hidden justify-start items-center gap-[11px] fade-up ${classNames}`}
        >
            <img
                src={data.img}
                alt="Profile picture"
                className="rounded-full w-[54px] h-[54px] fade-up"
            />
            <div className="flex justify-start items-center flex-col fade-up">
                <h2 className="tracking-[-1px] leading-[140%] text-[18px] font-bold w-full fade-up">
                    {fullName}
                </h2>
                <p className="font-regular text-[14px] leading-[140%] w-full text-light-3 fade-up">
                    {data.text}
                </p>
            </div>
        </Link>
    );
};

export default ProfileData;
