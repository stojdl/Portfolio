import ContactForm from "@/Components/Forms/ContactForm";
import H2 from "@/Components/Headings/H2";
import Paragraph from "@/Components/Paragraph";
import Section from "@/Components/Section";
import { usePage } from "@inertiajs/react";
import Contacts from "@/SharedFragments.tsx/Contacts";
import Image from "@/Components/Image";

const Info = () => {
    const { contact } = usePage<{ contact: any }>().props;
    return (
        <Section
            size="thin"
            className="min-h-noNavNoFooterScreen space-y-16 bg-contactForm bg-cover md:bg-contain 3xl: bg-no-repeat"
        >
            <div className="w-full pb-2 space-y-2 sm:space-y-4 md:w-auto md:space-y-8 md:text-center md:px-4 md:border-l border-slate-300 md:-ml-px backdrop-blur-sm">
                <H2>{contact.heading}</H2>
                <div className="max-w-xl">
                    <Paragraph>{contact.subheading}</Paragraph>
                </div>
            </div>
            <div className="w-full max-w-2xl lg:max-w-3xl px-2 py-4 md:px-4 lg:px-6 lg:py-3 md:py-2 border border-slate-300 rounded bg-slate-100 dark:bg-slate-800 opacity-95 drop-shadow-xl">
                <Contacts />
            </div>
            <div
                id="kontaktni_formular"
                className="relative w-full p-2 border border-slate-300 text-center rounded md:p-4 md:max-w-2xl lg:max-w-4xl bg-slate-100 dark:bg-slate-800 opacity-95 drop-shadow-xl"
            >
                <ContactForm />
            </div>
        </Section>
    );
};

export default Info;
