import { ButtonHTMLAttributes, ReactNode } from "react";

export interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    arrow?: boolean;
}
