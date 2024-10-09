import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";

const Others = () => {
    const { projects } = usePage<{ projects: any }>().props;

    return (
        <Section size="thin" className="space-y-8 md:space-y-8">
            <div className="space-y-2 sm:space-y-4 md:space-y-8 md:text-center">
                <H2>{projects.others.heading}</H2>
            </div>
            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>{projects.others.paragraph}</Paragraph>
            </div>
            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>{projects.others.paragraph2}</Paragraph>
            </div>{" "}
            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>{projects.others.paragraph3}</Paragraph>
            </div>{" "}
            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>{projects.others.paragraph4}</Paragraph>
            </div>
        </Section>
    );
};

export default Others;
