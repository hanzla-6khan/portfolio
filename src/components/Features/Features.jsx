import { Title } from "../../layouts/Title";
import { Card } from "./Card";
import { FaDatabase, FaFigma, FaAngular, FaCode, FaServer } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
export const Features = () => {
    return (
        <>
            <section id="featurs" className="w-full py-20 border-b-[1px] border-b-black">
                <Title title="Features" desc="What I DO" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-15">

                    <Card
                        title="Web Development"
                        des="Build responsive and dynamic websites using modern technologies like React and Node.js."
                        icon={<CgWebsite />}
                    />

                    <Card
                        title="Full Stack Development"
                        des="Specialized in both front-end and back-end development with expertise in MERN and MEAN stacks."
                        icon={<FaCode />}  // General Development Icon
                    />
                    <Card
                        title="MEAN Stack "
                        des="Develop robust, efficient, and scalable applications using MongoDB, Express, Angular, and Node.js."
                        icon={<FaAngular />}  // Angular Icon
                    />
                    <Card
                        title="API Dev & Integration"
                        des=" Create and integrate  RESTful APIs to enhance front-end functionality with MongoDB, Express, and Node.js."
                        icon={<FaServer />}  // API and Server Icon
                    />
                    <Card
                        title="Database Management"
                        des="Efficiently Design and manage databases using MongoDB, MySQL, and PostgreSQL."
                        icon={<FaDatabase />}
                    />     <Card
                        title="Convert Figma To UI"
                        des="Design user-friendly interfaces and experiences for web and mobile applications."
                        icon={<FaFigma />}
                    />
                </div>
            </section>
        </>
    );
};
