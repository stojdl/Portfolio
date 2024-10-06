import H2 from "@/Components/Headings/H2";
import H5 from "@/Components/Headings/H5";
import Paragraph from "@/Components/Paragraph";
import ImagePlaceholder from "@/Components/Placeholders/Image";
import Section from "@/Components/Section";

const LMS = () => {
    return (
        <Section className="space-y-8 sm:space-y-16 bg-gradient-to-br from-zinc-600 to-slate-700 text-white lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-16 xl:space-x-32">
            <div className="flex flex-col space-y-2 sm:space-y-4 md:max-w-lg md:items-center lg:max-w-xs xl:max-w-sm lg:items-start">
                <div className="space-y-1 sm:space-y-2 md:text-center lg:text-left">
                    <H2 className="font-semibold">LMS</H2>
                    <H5>Testy</H5>
                </div>

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
            </div>
            <div className="md:w-full md:max-w-xl lg:max-w-xl lg:px">
                <ImagePlaceholder />
            </div>
        </Section>
    );
};

export default LMS;
