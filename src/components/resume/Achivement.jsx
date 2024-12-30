import { ResumeCard } from "./ResumeCard"
import { motion } from "motion/react"

export const Achivement = () => {

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            className="py-1 font-titleFont"
        >

            {/* Heading Section */}
            <div className="text-center ">
                <h2 className="text-4xl font-bold">Achievements</h2>
            </div>


            <div className="flex flex-col md:flex-row gap-10">

                <div className="flex-1">

                    <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

                        <ResumeCard
                            title="SCO Skardu / Freelancer Portal"
                            subTitle="SCO Skardu"

                            des="Designed and developed a user-friendly and visually appealing freelancer portal for SCO Skardu."
                            link="https://gbfreelancing.com"
                        />

                        <ResumeCard
                            title="FGEI / Induction Portal"

                            des="Completely redesigned and developed the Job Portal for FGEI, focusing on modern, responsive design principles to ensure seamless usability across devices. Maintained and enhanced portal functionality, implementing optimizations to improve performance and user experience."
                            link="https://induction-reg.fgei-cg.gov.pk/"
                        />
                    </div>
                </div>

                <div className="flex-1">

                    <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

                        <ResumeCard
                            title="FGEI / ERP System"
                            subTitle="Directorate SDR, Rawalpindi (Confidential) "

                            des="Designed and implemented HRM modules, including CHRM Officers Biodatas, Transfer Posting, and Time Scale Help Desk, streamlining data management for FGEI. Collaborated with stakeholders to develop key ERP modules focused on HRM functionalities, improving efficiency in managing personnel records, transfers, and help desk operations."
                            link="https://www.fgei.gov.pk/"
                        />

                        <ResumeCard
                            title="Rent And Relove Present"
                            subTitle="Under Construction"

                            des="Developing a MERN stack application, utilizing Tailwind CSS and Daisy UI for responsive and modern UI design. Implementing backend functionality with Node.js, Express, and MongoDB, incorporating JWT tokens, local storage, and cookies for secure authentication. Integrating real-time communication using Socket.io and managing state effectively with Zustand."
                            link="https://github.com/hanzla-6khan/authapp"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
