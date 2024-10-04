import { InertiaLinkProps } from "@inertiajs/react";
import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export interface DropdownButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
}

export interface DropdownLinkProps extends InertiaLinkProps {
    icon?: ReactNode;
}

export interface DropdownProps extends HtmlHTMLAttributes<HTMLDivElement> {
    trigger: ReactNode;
}
