import { InertiaLinkProps } from "@inertiajs/react";
import { ReactNode } from "react";

export interface LinkButtonProps extends InertiaLinkProps {
    icon?: ReactNode;
    arrow?: boolean;
}
