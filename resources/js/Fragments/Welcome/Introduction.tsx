import H1 from "@/Components/Headings/H1";
import H3 from "@/Components/Headings/H3";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";
import Image from "@/Components/Image";

const Introduction = () => {
    const { welcome } = usePage<{ welcome: any }>().props;
    // console.log("info usePage(): ", usePage());

    return (
        <Section
            size="thick"
            className="relative space-y-16 2xl:space-y-32 md:bg-intrduction bg-contain bg-bottom bg-no-repeat"
        >
            <div className="space-y-2 sm:space-y-4 md:space-y-8 md:text-center">
                <H1>{welcome.introduction.heading}</H1>
                <H3>{welcome.introduction.subheading}</H3>
                {/* <H1>Junior web developer</H1>
                <H3>Poptávám spolupráci.</H3> */}
            </div>

            <div className="flex flex-col items space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:items-center">
                <div className="md:max-w-xs lg:max-w-md">
                    <Image src="/images/responsive_design.png" />
                </div>
                <div className="space-y-2 border bg-slate-100 dark:bg-slate-900 dark:drop-shadow-slate-100 px-4 py-8 rounded drop-shadow-xl md:drop-shadow-2xl md:max-w-xs md:px-8 md:py-4 lg:max-w-md lg:space-y-4">
                    <Paragraph>{welcome.introduction.paragraph_1}</Paragraph>
                    {/* <Paragraph>{welcome.introduction.paragraph_2}</Paragraph> */}
                </div>
            </div>
            {/* <Image
                src="/images/backgrounds/introduction.png"
                className="hidden md:block md:absolute -z-10 bottom-0"
            /> */}
        </Section>
    );
};

export default Introduction;
