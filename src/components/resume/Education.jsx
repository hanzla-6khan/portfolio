import { ResumeCard } from "./ResumeCard";
import { motion } from "motion/react"
export const Education = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} className="w-full flex flex-col md:flex-row gap-10">

            <div className="flex-1">
                <div className="py-12 font-sans gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2016-2023</p>
                    <h1 className="text-3xl font-bold">Education Quality</h1>
                </div>
                <div className="w-full h-auto md:h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BScs in Computer Science"
                        subTitle="FUUAST University Islamabad Campus(2019 - 2023)"
                        result="3.02/4"
                        des="Completed a comprehensive program focusing on computer science concepts, software development, and problem-solving skills. Gained hands-on experience through projects and coursework to prepare for a professional career in technology."
                    />
                    <ResumeCard
                        title="ICS"
                        subTitle="Public School & College Skardu (2017 - 2019)"
                        result="75%"
                        des="Focused on foundational concepts in computer science, mathematics, and physics. Developed analytical and problem-solving skills to pursue higher education in technology."
                    />


                </div>
            </div>




            <div className="flex-1">
                <div className="py-12 font-sans gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2019-2023</p>
                    <h1 className="text-3xl font-bold">University Achievements</h1>
                </div>
                <div className="w-full h-auto  md:h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Reservation and Review System"
                        subTitle="Final Year Project | MEAN Stack (2023)"
                        result="Completed"
                        des="Designed and developed a reservation and review platform using the MEAN stack. Features include user authentication, real-time booking, and review management with a focus on scalability and performance."
                    />
                    <ResumeCard
                        title="Chat Application"
                        subTitle="University Assignment | Node.js & Socket.IO (2022)"
                        result="Completed"
                        des="Created a real-time chat application enabling user communication via WebSockets. Implemented features like private messaging and typing indicators."
                    />


                </div>
            </div>



        </motion.div>


    );
};
