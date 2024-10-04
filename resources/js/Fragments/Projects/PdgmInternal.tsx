import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Image from "@/Components/Image";
import ImagePlaceholder from "@/Components/Placeholders/Image";
import Section from "@/Components/Section";
import LinkButton from "@/Components/LinkButton";

const PdgmInternal = () => {
    return (
        <Section className="space-y-8 sm:space-y-16 bg-slate-950 text-white lg:flex-row-reverse lg:space-x-reverse lg:justify-center lg:space-y-0 lg:space-x-16 xl:space-x-reverse xl:space-x-32">
            <div className="w-full flex flex-col items-center space-y-2 sm:space-y-4 md:max-w-lg md:text-center lg:max-w-xs xl:max-w-sm lg:items-end">
                <H2>Internal Paradigma</H2>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Nam quis nulla. Nam sed tellus id magna elementum tincidunt.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Nam quis nulla. Nam sed tellus id magna elementum tincidunt.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?
                </Paragraph>
                <LinkButton href={route("projects.internal_paradigma")}>
                    Ukázat více -{">"}
                </LinkButton>
            </div>
            <div className="md:w-full md:max-w-xl lg:max-w-xl lg:hover:scale-125 transition-transform duration-200">
                <Image src="/images/paradigma.png" />
            </div>
        </Section>
    );
};

export default PdgmInternal;
