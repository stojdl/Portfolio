import { HtmlHTMLAttributes } from "react";

export interface ShowOfferTileProps extends HtmlHTMLAttributes<HTMLDivElement> {
    name: string;
    email: string;
    text: string;
}
