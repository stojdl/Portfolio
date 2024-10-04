import H2 from "@/Components/Headings/H2";
import H4 from "@/Components/Headings/H4";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";

const About = () => {
    const { welcome } = usePage<{ welcome: any }>().props;

    return (
        <Section className="bg-slate-700 dark:bg-neutral-900 text-white space-y-16">
            <div className="space-y-4 sm:space-y-8 md:max-w-lg md:text-center lg:max-w-2xl">
                <H2>{welcome.about.heading}</H2>
                <Paragraph>{welcome.about.subheading}</Paragraph>
            </div>

            <div className="flex flex-col space-y-12 sm:space-y-16 lg:flex-row lg:space-x-16 lg:space-y-0">
                <div className="px-4 py-6 border rounded space-y-2 md:max-w-lg lg:h-96 lg:max-w-72 lg:px-6 lg:py-8 lg:space-y-6 xl:max-w-80">
                    <H4>Frontend</H4>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nam quis nulla. Nam sed tellus id magna elementum
                        tincidunt.
                    </Paragraph>
                </div>

                <div className="px-4 py-6 border rounded space-y-2 md:max-w-lg lg:h-96 lg:max-w-72 lg:px-6 lg:py-8 lg:space-y-6 xl:max-w-80">
                    <H4>Backend</H4>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nam quis nulla. Nam sed tellus id magna elementum
                        tincidunt. Ut enim ad minima veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi consequatur?
                    </Paragraph>
                </div>

                <div className="px-4 py-6 border rounded space-y-2 md:max-w-lg lg:h-96 lg:max-w-72 lg:px-6 lg:py-8 lg:space-y-6 xl:max-w-80">
                    <H4>Databáze</H4>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nam quis nulla. Nam sed tellus id magna elementum
                        tincidunt. Curabitur vitae diam non enim vestibulum
                        interdum.
                    </Paragraph>
                </div>
            </div>
        </Section>
    );
};

export default About;
