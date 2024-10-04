import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import ImagePlaceholder from "@/Components/Placeholders/Image";
import Section from "@/Components/Section";

const Logomanual = () => {
    return (
        <Section className="space-y-8 sm:space-y-16 bg-red-100 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-16 xl:space-x-32">
            <div className="space-y-2 sm:space-y-4 md:max-w-lg md:text-center lg:max-w-xs xl:max-w-sm">
                <H2>Logomanuál</H2>
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

export default Logomanual;
