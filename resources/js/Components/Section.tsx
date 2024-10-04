import { SectionProps } from "@/types/Section";

const Section = (props: SectionProps) => {
    const { className, children, size = "medium" } = props;

    const sizes = {
        thin: "sm:p-10 md:py-16",
        medium: "sm:px-10 sm:py-16 md:py-32",
        thick: "sm:px-10 sm:py-16 md:py-32 2xl:py-48 ",
    };

    return (
        <section
            {...props}
            className={
                `px-4 py-12 flex flex-col md:px-0 md:items-center ` +
                sizes[size] +
                " " +
                className
            }
        >
            {children}
        </section>
    );
};

export default Section;
