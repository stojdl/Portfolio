import { AnchorProps } from "@/types/Anchor";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Anchor = (props: AnchorProps) => {
    const { children, icon, arrow = false } = props;

    return (
        <a
            className="px-4 py-2 flex justify-center items-center border rounded space-x-2 bg-slate-200 dark:bg-slate-700 border-slate-300 md:w-max md:px-6 hover:bg-slate-300 dark:hover:bg-slate-600 dark:hover:text-neutral-200 dark:text-slate-100"
            target="blank"
            {...props}
        >
            {icon && icon}
            <span>{children}</span>
            {arrow && <FaExternalLinkAlt className="w-3 h-3" />}
        </a>
    );
};

export default Anchor;
