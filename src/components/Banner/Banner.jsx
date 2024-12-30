
import { useTypewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiGmail, SiTailwindcss, SiAngular, SiNextdotjs } from "react-icons/si";
import { banner } from "../../assets/index";
export const Banner = () => {
    const [text] = useTypewriter({
        words: ['Web Application Developer', 'Frontend Specialist', 'Backend Developer', 'JavaScript!', 'React.js', 'Node.js', 'Full Stack Developer'],
        loop: true, typeSpeed: 25, deleteSpeed: 20, delaySpeed: 500
    })
    return (
        <>
            <section
                id="home"
                className="w-full py-10 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start justify-between border-b-[1px] border-b-black font-poppins"
            >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-1 px-4 lg:px-8">
                    <h4 className="text-lg font-normal text-center lg:text-left">
                        Welcome to my protfolio site
                    </h4>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                        Hi, I m{' '}
                        <span className="text-designColor capitalize">Hanzala Khan</span>
                    </h1>
                    <h2 className="text-xl lg:text-2xl font-bold text-white text-center lg:text-left">
                        a <span>{text}</span>
                    </h2>
                    <p className="text-base font-serif leading-6 tracking-wide text-center lg:text-left">
                        Aspiring to secure a challenging role in web development, leveraging my expertise in MERN stack
                        technologies, including React.js, Node.js, Express, MongoDB, PostgreSQL, HTML5, CSS, Tailwind CSS, and Daisy UI. With a
                        strong focus on user experience enhancement and efficient problem-solving, I am committed to contributing to innovative
                        projects that involve building scalable web applications and optimizing website performance.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between mt-6 ">
                        <div>
                            <h2 className="text-base uppercase font-titleFont mb-4 text-center lg:text-left">
                                Find me in
                            </h2>
                            <div className="flex justify-center lg:justify-start mb-5  gap-3">
                                <span className="bannerIcon">
                                    <a href="hanzalakhan101010@gmail.com" target='_blank'>  <SiGmail /></a>
                                </span>
                                <span className="bannerIcon">
                                    <a href="https://github.com/hanzla-6khan" target='_blank'>
                                        <FaGithub /></a>

                                </span>
                                <span className="bannerIcon">
                                    <a href='https://www.linkedin.com/in/hanzala-6khan' target='_blank'>  <FaLinkedinIn /></a>

                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-base uppercase font-titleFont mb-5  text-center lg:text-left">
                                Best Skill On
                            </h2>
                            <div className="flex justify-center lg:justify-start gap-3">
                                <span className="bannerIcon">
                                    <FaReact />
                                </span>
                                <span className="bannerIcon">
                                    <SiNextdotjs />
                                </span>
                                <span className="bannerIcon">
                                    <SiTailwindcss />
                                </span>
                                <span className="bannerIcon">
                                    <SiAngular />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center  relative mt-10 lg:mt-0">
                    <img
                        className="w-[250px] h-[300px] lg:w-[400px] lg:h-[500px] xl:w-[400px] xl:h-[400px] z-10"
                        src={banner}
                        alt="banner img"
                    />
                    <div className="absolute w-[250px] h-[300px] lg:w-[400px] lg:h-[500px] xl:w-[400px] xl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne"></div>
                </div>
            </section>


        </>
    )
}
