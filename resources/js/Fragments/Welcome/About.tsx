import H2 from "@/Components/Headings/H2";
import H4 from "@/Components/Headings/H4";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";

const About = () => {
    const { welcome } = usePage<{ welcome: any }>().props;

    return (
        <Section className="bg-gradient-to-br from-slate-700 to-slate-600 dark:from-slate-900 dark:to-slate-800 text-white space-y-16">
            <div className="space-y-4 sm:space-y-8 md:max-w-lg md:text-center lg:max-w-2xl">
                <H2>{welcome.about.heading}</H2>
                <Paragraph>{welcome.about.subheading}</Paragraph>
            </div>

            <div className="flex flex-col space-y-12 sm:space-y-16 lg:flex-row lg:space-x-16 lg:space-y-0">
                <div className="px-4 py-6 border rounded space-y-2 bg-slate-500 dark:bg-slate-700 md:max-w-lg lg:h-96 lg:max-w-72 lg:px-6 lg:py-8 lg:space-y-6 xl:max-w-80">
                    <H4 className="md:text-center">Frontend</H4>
                    <Paragraph>{welcome.about.frontend}</Paragraph>
                </div>

                <div className="px-4 py-6 border rounded space-y-2 bg-slate-500 dark:bg-slate-700 md:max-w-lg lg:h-96 lg:max-w-72 lg:px-6 lg:py-8 lg:space-y-6 xl:max-w-80">
                    <H4 className="md:text-center">Backend</H4>
                    <Paragraph>{welcome.about.backend}</Paragraph>
                </div>

                <div className="px-4 py-6 border rounded space-y-2 bg-slate-500 dark:bg-slate-700 md:max-w-lg lg:h-96 lg:max-w-72 lg:px-6 lg:py-8 lg:space-y-6 xl:max-w-80">
                    <H4 className="md:text-center">Git</H4>
                    <Paragraph>{welcome.about.git}</Paragraph>
                </div>
            </div>
            <div className="space-y-4 sm:space-y-8 md:max-w-lg md:text-center lg:max-w-2xl">
                <Paragraph>{welcome.about.paragraph}</Paragraph>
            </div>
        </Section>
    );
};

export default About;
