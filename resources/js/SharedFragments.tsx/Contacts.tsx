// icons
import { AiOutlinePhone } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contacts = () => {
    return (
        <div className="w-full flex flex-col space-y-8 sm:space-y-12 md:flex-row md:justify-between md:max-w-2xl md:space-y-0 lg:max-w-3xl">
            <div className="w-1/3 min-w-max flex items-center space-x-2 sm:space-x-4">
                <MdOutlineAlternateEmail className="w-6 h-6" />
                <p>bedrich.stojdl@email.cz</p>
            </div>
            <div className="w-1/3 min-w-max flex items-center justify-center space-x-2 sm:space-x-4">
                <AiOutlinePhone className="w-6 h-6" />

                <p className="flex flex-col">
                    +420 777 037 531
                    <span className="text-xs">(SMS, Whatsapp, Telegram)</span>
                </p>
            </div>
            <div className="w-1/3 min-w-max flex items-center md:justify-end space-x-2 sm:space-x-4">
                <CiLinkedin className="w-6 h-6" />
                <p>@stojdl</p>
            </div>
        </div>
    );
};

export default Contacts;
