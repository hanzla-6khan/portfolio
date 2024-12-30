

import { Title } from '../../layouts/Title'
import { ProjectCards } from './ProjectCards'
import {
    projectTwo, projectThree, fgei,
    gbportal,
    induction,
    duksa2
} from "../../assets/index";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    desc="My Projects"
                />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCards
                    title="FGEI / ERP System (Confidential)"
                    des="A comprehensive ERP system designed for FGEI Institutions, enhancing HRM functionalities and streamlining operational workflows."
                    src={fgei}
                    link="https://www.fgei.gov.pk/"
                />
                <ProjectCards
                    title="SCO Skardu / Freelancer Portal"
                    des="An online platform connecting freelancers with potential clients, tailored for Skardu's local community."
                    src={gbportal}
                    link="https://gbfreelancing.com/"
                />

                <ProjectCards
                    title="FGEI / Induction Portal"
                    des="A centralized portal to manage the induction process for FGEI employees, ensuring streamlined onboarding."
                    src={induction}
                    link="https://induction-reg.fgei-cg.gov.pk/"
                />
                <ProjectCards
                    title="Social Media Clone"
                    des="A full-stack clone of a popular social media application, featuring real-time chat and feed functionality."
                    src={projectThree}
                />
                <ProjectCards
                    title="Reservation Portal"
                    des="A reservation system built with React and Node.js, facilitating seamless hotel bookings."
                    src={duksa2}
                    link="https://github.com/hanzla-6khan/frontendduksa"
                />
                <ProjectCards
                    title="Chatting App"
                    des="A real-time messaging application with user authentication and responsive design."
                    src={projectTwo}
                    link="https://github.com/hanzla-6khan/remoteassignment"
                />
            </div>

        </section>
    )
}
