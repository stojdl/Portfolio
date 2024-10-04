import { HtmlHTMLAttributes, ReactNode } from "react";

export interface DividerProps extends HtmlHTMLAttributes<HTMLDivElement> {
    heading?: string;
    icon?: ReactNode; // nevim jak se typuje jejich icona
}
