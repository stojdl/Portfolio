import { ParagraphProps } from "@/types/Paragraph";

const Paragraph = (props: ParagraphProps) => {
    const { className, children } = props;
    return (
        <p {...props} className={`text-justify ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;
