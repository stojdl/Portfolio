import H2 from "@/Components/Headings/H2";
import LinkButton from "@/Components/LinkButton";
import Section from "@/Components/Section";
import { GiKey } from "react-icons/gi";

const Create = () => {
    return (
        <Section size="thin">
            <div className="w-full flex px-4 sm:px-8 md:px-8 lg:px-16">
                <H2>Vytvořit klíč</H2>
            </div>
            <div className="mt-4 w-full px-4 flex flex-col space-y-4 sm:mt-8 sm:px-8 md:px-8 lg:px-16">
                <LinkButton href="">
                    <p className="flex items-center justify-center space-x-2 md:justify-start">
                        <GiKey />
                        <span>Pro Sunizer</span>
                    </p>
                </LinkButton>
                <LinkButton href="">
                    <p className="flex items-center justify-center space-x-2 md:justify-start">
                        <GiKey />
                        <span>Pro Internal Paradigmu</span>
                    </p>
                </LinkButton>
            </div>
        </Section>
    );
};

export default Create;
