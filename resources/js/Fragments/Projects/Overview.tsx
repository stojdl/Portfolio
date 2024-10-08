import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";

const Overview = () => {
    const { projects } = usePage<{ projects: any }>().props;

    return (
        <Section size="thin" className="space-y-8">
            <div className="space-y-2 sm:space-y-4 md:space-y-8 md:text-center">
                <H2>{projects.overview.heading}</H2>
            </div>

            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>{projects.overview.paragraph}</Paragraph>
            </div>
            {/* <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Nam quis nulla. Nam sed tellus id magna elementum tincidunt.
                </Paragraph>
            </div> */}
        </Section>
    );
};

export default Overview;
