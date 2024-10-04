import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";

const Overview = () => {
    return (
        <Section size="thin" className="space-y-8 md:space-y-8">
            <div className="space-y-2 sm:space-y-4 md:space-y-8 md:text-center">
                <H2>Overview placeholder heading</H2>
            </div>

            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Nam quis nulla. Nam sed tellus id magna elementum tincidunt.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?
                </Paragraph>
            </div>
            <div className="md:max-w-lg lg:max-w-2xl">
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Nam quis nulla. Nam sed tellus id magna elementum tincidunt.
                </Paragraph>
            </div>
        </Section>
    );
};

export default Overview;
