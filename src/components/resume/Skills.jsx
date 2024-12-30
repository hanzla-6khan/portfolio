import { motion } from "framer-motion";

export const Skills = () => {
    const skills = [
        { name: "Node.js", percentage: 70 },
        { name: "Express.js", percentage: 60 },
        { name: "MongoDB / MySQL", percentage: 45 },
        { name: "Next.js", percentage: 30 },
        { name: "npm, GitHub", percentage: 50 },
    ];

    const designSkills = [
        { name: "React.js", percentage: 65 },
        { name: "HTML 5", percentage: 95 },
        { name: "TailwindCSS", percentage: 80 },
        { name: "JavaScript", percentage: 75 },
        { name: "Angular 14+", percentage: 40 },
    ];

    const renderSkillBars = (skills) =>
        skills.map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                    <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ width: `${skill.percentage}%` }}
                        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                    >
                        <span className="absolute -top-7 right-0">{skill.percentage}%</span>
                    </motion.span>
                </span>
            </div>
        ));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 lg:gap-20">
                <div className="w-1/2">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
                    </div>
                    <div className="mt-14 w-full flex flex-col gap-6">
                        {renderSkillBars(skills)}
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Design Skills</h2>
                    </div>
                    <div className="mt-14 w-full flex flex-col gap-6">
                        {renderSkillBars(designSkills)}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
