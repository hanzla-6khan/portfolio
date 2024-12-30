import PropTypes from 'prop-types';

export const ResumeCard = ({ title, subTitle, result, des, link }) => {
    return (
        <div className="w-full h-1/3 group flex">
            {/* Indicator */}
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -lef-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>
            {/* Content */}
            <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 sm:p-6 md:p-10 flex flex-col justify-center gap-6 shadow-shadowOne">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                            {title}
                        </h3>
                        <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg shadow-shadowOne text-sm font-medium">
                            {result}
                        </p>
                    </div>

                </div>
                <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                    {des}
                </p>
                {/* Add Link */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-designColor   inline-block hover:text-white hover:underline"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

ResumeCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    result: PropTypes.string,
    des: PropTypes.string,
    link: PropTypes.string, // Optional prop for the link
};
