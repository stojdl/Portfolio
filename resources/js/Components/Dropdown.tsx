import {
    DropdownProps,
    DropdownLinkProps,
    DropdownButtonProps,
} from "@/types/Dropdown";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const DropdownLink = (props: DropdownLinkProps) => {
    const { icon, children, className } = props;

    return (
        <Link
            {...props}
            className={`block w-full px-4 py-1.5 pr-8 text-left hover:bg-slate-200 dark:hover:bg-slate-700 ${className}`}
        >
            <p className="flex items-center space-x-2">
                {icon && icon} <span>{children}</span>{" "}
            </p>
        </Link>
    );
};

const DropdownButton = (props: DropdownButtonProps) => {
    const { icon, children, className } = props;

    return (
        <button
            {...props}
            className={`w-full px-4 py-1.5 pr-8 text-left hover:bg-slate-200 dark:hover:bg-slate-700 ${className}`}
        >
            <p className="flex items-center space-x-2">
                {icon && icon} <span>{children}</span>{" "}
            </p>
        </button>
    );
};

const Dropdown = (props: DropdownProps) => {
    const { children, trigger } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen((p) => !p)}
            {...props}
        >
            {trigger}
            {isOpen && (
                <div className="absolute right-0 top-8 min-w-32 bg-white text-black border dark:bg-slate-900 dark:text-neutral-200">
                    {children}
                </div>
            )}
        </div>
    );
};

Dropdown.Link = DropdownLink;
Dropdown.Button = DropdownButton;

export default Dropdown;
