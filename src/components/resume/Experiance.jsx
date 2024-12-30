import { ResumeCard } from "./ResumeCard"
import { motion } from "motion/react"

export const Experiance = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div className="flex flex-col md:flex-row gap-10 w-full">

                <div className="flex-1 h-full">
                    <div className="flex flex-col gap-4">

                        <h2 className="text-4xl font-bold">Trainer Experience</h2>
                    </div>
                    <div className="mt-12 w-full   border-l-[6px] border-l-black border-opacity-30 ">

                        <div className="h-auto gap-10  flex flex-col">

                            <div className="flex flex-col">
                                <p className="text-sm text-designColor tracking-[4px] text-center"> January 2023 – June 2023</p>

                            </div>
                            <ResumeCard
                                title="Full Stack Intern"
                                subTitle="K2 Peak Technologies — (Jan 2023 - Jun 2023)"
                                result="Islamabad, Pakistan"
                                des="Developed scalable front-end and back-end architecture, integrating third-party APIs to enhance functionality and streamline data exchange."
                            />
                            <div className="flex flex-col">
                                <p className="text-sm text-designColor tracking-[4px] text-center"> January 2023 – June 2023</p>

                            </div>
                            <ResumeCard
                                title="ERP System Development"
                                subTitle="FGEI — (Aug 2023 - Mar 2024)"
                                result="Directorate SDR, Rawalpindi"
                                des="Designed and implemented HRM modules, including CHRM Officers Biodatas, Transfer Posting, and Time Scale Help Desk, streamlining data management for Federal Government Educational Institutions."
                            />
                        </div>
                    </div>
                </div>

                {/* Trainer Experience Section */}
                <div className="flex-1 h-full">
                    <div className="flex flex-col gap-4">

                        <h2 className="text-4xl font-bold"> Job Experience</h2>
                    </div>
                    <div className="mt-10 w-full  border-l-[6px] border-l-black border-opacity-30">
                        <div className="h-auto gap-10  flex flex-col">

                            <div className="flex flex-col">
                                <p className="text-sm text-designColor tracking-[4px] text-center"> January 2023 – June 2023</p>

                            </div>
                            <ResumeCard
                                title="Freelancer Portal "
                                subTitle="SCO Skardu — (Apr 2024 - May 2024)"
                                result="Skardu, Pakistan"
                                des="Contributed to the GB Freelancer Portal as an Associate Software Engineer in collaboration with the SCO team. Enhanced portal functionality to support user engagement and accessibility."
                            />
                            <div className="flex flex-col">
                                <p className="text-sm text-designColor tracking-[4px] text-center"> January 2023 – June 2023</p>

                            </div>
                            <ResumeCard
                                title="Induction Portal Development"
                                subTitle="FGEI — (Aug 2023 - Mar 2024)"
                                result="Directorate SDR, Rawalpindi"
                                des="Developed and implemented the Induction Portal for Federal Government Educational Institutions, improving the process of onboarding and induction for new employees. Streamlined the workflow, providing a user-friendly interface for new recruits."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
