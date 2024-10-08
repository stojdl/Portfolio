import { AnchorHTMLAttributes, ReactNode } from "react";

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: ReactNode;
    arrow?: boolean;
}
