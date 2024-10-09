import { HeadingProps } from "@/types/Heading";

const H4 = (props: HeadingProps) => {
    const { className, children } = props;
    return (
        <h4 {...props} className={`text-xl md:text-2xl ${className}`}>
            {children}
        </h4>
    );
};

export default H4;
