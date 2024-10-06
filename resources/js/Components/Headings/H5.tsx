import { HeadingProps } from "@/types/Heading";

const H5 = (props: HeadingProps) => {
    const { children, className } = props;

    return (
        <h5 {...props} className={`text-lg md:text-xl ${className}`}>
            {children}
        </h5>
    );
};

export default H5;
