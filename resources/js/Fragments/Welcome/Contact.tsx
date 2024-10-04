import H2 from "@/Components/Headings/H2";
import LinkButton from "@/Components/LinkButton";
import IconPlaceholder from "@/Components/Placeholders/Icon";
import Section from "@/Components/Section";

import Contacts from "@/SharedFragments.tsx/Contacts";

const Contact = () => {
    return (
        <Section size="thin" className="bg-contact ">
            <div className="w-full max-w-3xl flex flex-col border space-y-12 bg-slate-100 dark:bg-slate-900 dark:drop-shadow-slate-100 px-4 py-8 rounded drop-shadow-xl md:drop-shadow-2xl md:px-8 md:py-4 md:items-center lg:max-w-5xl">
                <div className="space-y-2 sm:space-y-4 md:text-center">
                    <H2>Kam se mi ozvat</H2>
                </div>
                <Contacts />
                <LinkButton href={route("contact")}>
                    Kontaktujte mě přes formulář -{">"}
                </LinkButton>
            </div>
        </Section>
    );
};

export default Contact;
