import { Link } from "react-router-dom";

const Profile = ({ img, name, text }) => {
    return (
        <div className="w-[190px] h-[190px] rounded-[30px] border border-solid border-dark-4 flex flex-col items-center justify-center fade-up">
            <img
                src={img}
                className="w-[54px] h-[54px] rounded-full mb-[10px] fade-up"
            />
            <h3 className="text-[14px] font-semibold leading-[140%] tracking-[-0.14px] fade-up">
                {name}
            </h3>
            <span className="text-[10px] font-medium leading-[140%] text-light-3 mb-[12px] fade-up">
                {text}
            </span>
            <Link
                href="#"
                className="bg-primary rounded-lg p-[6px_18px] text-[12px] font-semibold leading-[18px] transition-all duration-300 ease-linear focus:ring-2 outline-none fade-up"
            >
                <span className="fade-up">Follow</span>
            </Link>
        </div>
    );
};

export default Profile;
