

import { logos } from "../../assets/index";


export const LeftContact = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r p-4 lgl:p-8  flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={logos}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Hanzala khan</h3>
                <p className="text-lg font-normal text-gray-400">
                    MERN Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    I am  proficient MERN Stack Developer passionate about building scalable and user-friendly web applications.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+92 3421518303</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">hanzalakhan101010@gmail.com</span>
                </p>
            </div>

        </div>
    );
}
