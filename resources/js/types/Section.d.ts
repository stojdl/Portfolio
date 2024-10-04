import { HtmlHTMLAttributes } from "react";

export interface SectionProps extends HtmlHTMLAttributes<HTMLDivElement> {
    size?: "thin" | "medium" | "thick";
    className?: string;
}
