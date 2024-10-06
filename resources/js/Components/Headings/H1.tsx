import { HeadingProps } from "@/types/Heading";
import { ReactNode } from "react";

const H1 = (props: HeadingProps) => {
    const { children, className } = props;
    return (
        <h1
            {...props}
            className={`text-3xl sm:text-4xl md:text-5xl ${className}`}
        >
            {children}
        </h1>
    );
};

export default H1;
