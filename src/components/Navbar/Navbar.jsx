import { useState } from "react";
import { NavlinksData } from "../constants/index";
import { Link } from "react-scroll";

import {
    logos
} from "../../assets/index";

export const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="w-full navbar shadow-md font-agudisplay border-b-[1px] border-b-gray-600 sticky">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl flex items-center gap-2">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={logos} />
                        </div>
                    </div>
                    Hanzala
                </a>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center gap-3">
                    {NavlinksData.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className="text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300"
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="dropdown dropdown-end lg:hidden">
                <button
                    onClick={toggleDropdown}
                    className="btn btn-ghost btn-circle"
                    aria-label="Toggle Navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <ul
                    tabIndex={0}
                    className={`menu menu-compact dropdown-content mt-3 p-2 bg-slate-400 rounded-box w-52 transition-all duration-300 ${dropdownVisible ? "block" : "hidden"}`}
                >
                    {NavlinksData.map(({ _id, title, link }) => (
                        <li key={_id}>
                            <Link
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block px-4 py-2 text-white hover:text-yellow hover:bg-designColor rounded-md transition duration-300  shadow-shadowOne"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
