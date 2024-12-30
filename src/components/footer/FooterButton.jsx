
import { PiHandArrowUpFill } from "react-icons/pi";
export const FooterButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full py-10">
            <p className="text-center text-gray-500 text-base">
                © 2022. All rights reserved by Hanzala Khan
            </p>
            <button
                onClick={scrollToTop}

                className="fixed bottom-10 right-10 px-4 py-4 bg-designColor text-white rounded-full shadow-shadowOne hover:bg-opacity-80 transition duration-300 flex items-center justify-center"
            >
                <PiHandArrowUpFill className="text-xl" />
            </button>
        </div>
    );

}
