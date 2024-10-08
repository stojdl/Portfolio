import { LinkButtonProps } from "@/types/LinkButton";
import { Link } from "@inertiajs/react";
import { FaArrowRightLong } from "react-icons/fa6";

const LinkButton = (props: LinkButtonProps) => {
    const { children, icon, arrow = false } = props;
    return (
        <Link
            className="w-full px-4 py-2 flex items-center justify-center border rounded space-x-2 bg-slate-200 dark:bg-slate-700 border-slate-300 md:px-6 md:w-max hover:bg-slate-300 dark:hover:bg-slate-600 dark:hover:text-neutral-200"
            {...props}
        >
            {icon && icon}
            <span>{children}</span>
            {arrow && <FaArrowRightLong />}
        </Link>
    );
};

export default LinkButton;
