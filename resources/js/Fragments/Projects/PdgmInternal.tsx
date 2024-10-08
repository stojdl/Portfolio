import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Image from "@/Components/Image";
import Section from "@/Components/Section";
import LinkButton from "@/Components/LinkButton";
import H5 from "@/Components/Headings/H5";
import { usePage } from "@inertiajs/react";

const PdgmInternal = () => {
    const { projects } = usePage<{ projects: any }>().props;

    return (
        <Section className="space-y-8 sm:space-y-16 bg-gradient-to-br from-slate-950 to-neutral-950 text-white lg:flex-row-reverse lg:space-x-reverse lg:justify-center lg:space-y-0 lg:space-x-16 xl:space-x-reverse xl:space-x-32">
            <div className="w-full flex flex-col space-y-2 sm:space-y-4 md:max-w-lg md:items-center lg:max-w-xs xl:max-w-sm lg:items-end">
                <div className="space-y-1 sm:space-y-2 md:text-center lg:text-right">
                    <H2 className="font-semibold">Internal Paradigma</H2>
                    <H5>Frontend + Backend</H5>
                </div>

                <Paragraph>{projects.paradigma.paragraph}</Paragraph>
                <Paragraph>{projects.paradigma.paragraph2}</Paragraph>
                <LinkButton href={route("projects.internal_paradigma")}>
                    {projects.paradigma.link}
                </LinkButton>
            </div>
            <div className="md:w-full md:max-w-xl lg:max-w-xl lg:hover:scale-110 transition-transform duration-200">
                <Image
                    src="/images/paradigma.png"
                    className="drop-shadow-2xl"
                />
            </div>
        </Section>
    );
};

export default PdgmInternal;
