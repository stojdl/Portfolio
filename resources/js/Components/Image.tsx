import { ImageProps } from "@/types/ImageProps";
import React from "react";

const Image = (props: ImageProps) => {
    const { className } = props;
    return <img {...props} className={`rounded ${className}`} />;
};

export default Image;
