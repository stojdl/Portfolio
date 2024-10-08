import { HtmlHTMLAttributes } from "react";

export interface ShowKeyTileProps extends HtmlHTMLAttributes<HTMLDivElement> {
    keyFor: "Sunizer" | "Internal Paradigma";
    value: string;
    valid: boolean;
    used: boolean;
}
