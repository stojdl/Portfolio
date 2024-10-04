import { LinkButtonProps } from "@/types/LinkButton";
import { Link } from "@inertiajs/react";

const LinkButton = (props: LinkButtonProps) => {
    const { children } = props;
    return (
        <Link
            className="block w-full px-4 py-2 text-center border rounded md:px-6 md:w-max hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-neutral-200"
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
