import { HeadingProps } from "@/types/Heading";

const H2 = (props: HeadingProps) => {
    const { children, className } = props;

    return (
        <h2
            {...props}
            className={`text-2xl sm:text-3xl md:text-4xl ${className}`}
        >
            {children}
        </h2>
    );
};

export default H2;
