import Anchor from "@/Components/Anchor";
import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Image from "@/Components/Image";
import ImagePlaceholder from "@/Components/Placeholders/Image";
import Section from "@/Components/Section";
import H4 from "@/Components/Headings/H4";
import H5 from "@/Components/Headings/H5";

const Sunizer = () => {
    return (
        <Section className="space-y-8 sm:p-10 sm:space-y-16 bg-gradient-to-br from-amber-400 to-yellow-200 dark:from-amber-500 dark:to-yellow-400 dark:text-black lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-16 xl:space-x-32">
            <div className="w-full flex flex-col space-y-2 sm:space-y-4 md:max-w-lg md:items-center lg:items-start lg:max-w-xs">
                <div className="space-y-1 sm:space-y-2 md:text-center lg:text-left">
                    <H2 className="font-semibold">Sunizer</H2>
                    <H5>Frontend</H5>
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
                <Anchor href={"https://sunizer.cz/"}>
                    Navštivte stránku -{">"}
                </Anchor>
            </div>
            <div className="md:w-full md:max-w-xl lg:max-w-xl lg:hover:scale-125 transition-transform duration-200">
                <Image src="/images/sunizer.png" />
            </div>
        </Section>
    );
};

export default Sunizer;
