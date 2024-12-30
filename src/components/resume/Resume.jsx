import { useState } from "react";
import { Title } from "../../layouts/Title";
import { Achivement } from "./Achivement";
import { Education } from "./Education";
import { Experiance } from "./Experiance";
import { Skills } from "./Skills";

export const Resume = () => {
    const [activeTab, setActiveTab] = useState("Education");

    const tabs = [
        { name: "Education", component: <Education /> },
        { name: "Skills", component: <Skills /> },
        { name: "Experience", component: <Experiance /> },
        { name: "Achievement", component: <Achivement /> },
    ];

    return (
        <section id="resume" className="w-full py-5 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center mb-5">
                <Title title="1.5+ YEARS OF EXPERIENCE" desc="My Resume" />
            </div>
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {tabs.map((tab) => (
                    <li
                        key={tab.name}
                        className={`resumeLi cursor-pointer text-center py-2 border-b-2 ${activeTab === tab.name
                            ? "border-designColor text-designColor font-bold"
                            : "border-transparent"
                            }`}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                    </li>
                ))}
            </ul>
            <div className="content mt-8">{tabs.find((tab) => tab.name === activeTab).component}</div>
        </section>
    );
};
