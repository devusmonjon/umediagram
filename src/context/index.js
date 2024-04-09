import { createContext, useReducer } from "react";
import profilePic from "../assets/profile-pic.svg";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
    users: [
        {
            id: 1,
            name: "Usmonjon",
            surname: "Hasanov",
            username: "usmonjon",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 2,
            name: "Savannah",
            surname: "Nguyen",
            username: "savannah",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 3,
            name: "Wade",
            surname: "Warren",
            username: "wade1",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 4,
            name: "Dianne",
            surname: "Russell",
            username: "dianne",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 5,
            name: "Robert",
            surname: "Fox",
            username: "robert",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 6,
            name: "Ronald",
            surname: "Richards",
            username: "ronald",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 7,
            name: "Jane",
            surname: "Cooper",
            username: "jane1",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 8,
            name: "Countru",
            surname: "Henry",
            username: "countru",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
        {
            id: 9,
            name: "Annette",
            surname: "Black",
            username: "annette",
            followers: 1324,
            following: 179,
            pic: profilePic,
            stories: [
                {
                    id: 1,
                    type: "image",
                    source: "https://picsum.photos/333/591",
                },
            ],
        },
    ],
    navbarToggle: false,
    messagesCount: 3,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ON_NAVBAR_TOGGLE":
            return { ...state, navbarToggle: payload };
        case "SET_USERS":
            return { ...state, users: payload };
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
