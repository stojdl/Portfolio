import { InertiaLinkProps } from "@inertiajs/react";
import { AnchorHTMLAttributes } from "react";

export interface DownloadTileProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    locked?: boolean;
}
