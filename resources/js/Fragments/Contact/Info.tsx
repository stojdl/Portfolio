import ContactForm from "@/Components/Forms/ContactForm";
import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";
import Contacts from "@/SharedFragments.tsx/Contacts";

const Info = () => {
    // console.log("info usePage(): ", usePage());
    return (
        <Section size="thin" className="space-y-16">
            <div className="w-full space-y-2 sm:space-y-4 md:w-auto md:space-y-8 md:text-center">
                <H2>Máte zájem? Kontaktujte mě</H2>
                <div className="max-w-lg">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nam quis nulla. Nam sed tellus id magna elementum
                        tincidunt.
                    </Paragraph>
                </div>
            </div>
            <Contacts />
            <div
                id="kontaktni_formular"
                className="w-full p-2 border text-center rounded md:p-4 md:max-w-2xl lg:max-w-4xl"
            >
                <ContactForm />
            </div>
        </Section>
    );
};

export default Info;
