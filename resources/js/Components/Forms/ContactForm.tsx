import { FormProps } from "@/types/Form";

import Submit from "./Buttons/Submit";
import TextInput from "./Inputs/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import Textarea from "./Inputs/Textarea";
import { Offer } from "@/types/Offer";
import { BiHappyBeaming } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";

const ContactForm = (props: FormProps) => {
    const { contact } = usePage<{ contact: any }>().props;

    const [isSent, setSent] = useState(false);

    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        text: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("send"), {
            onSuccess: () => {
                setSent(true);
            },
        });
    };

    // console.log("data: ", data);
    // console.log("errors: ", errors);
    return isSent ? (
        <div className="relative h-72 flex flex-col justify-center items-center space-y-4">
            <FaRegWindowClose
                onClick={() => setSent(false)}
                className="absolute top-2 right-2 w-6 h-6 cursor-pointer hover:text-slate-500 dark:hover:text-slate-300"
            />
            <BiHappyBeaming className="w-8 h-8" />
            <p className="text-justify">
                Děkuji, Vaše nabídka byla odeslaná. V nejbližsí možné době se
                Vám ozvu na E-mail.
            </p>
        </div>
    ) : (
        <form {...props} onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-start space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                <TextInput
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    placeholder={contact.form.name}
                    error={errors.name}
                />
                <TextInput
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    placeholder="E-mail"
                    error={errors.email}
                />
            </div>
            <div className="w-full flex flex-col items-start">
                <Textarea
                    name="text"
                    value={data.text}
                    onChange={(e) => setData("text", e.target.value)}
                    placeholder={contact.form.offer}
                    error={errors.text}
                />
            </div>
            <div className="w-full flex justify-center">
                <Submit disabled={processing} arrow>
                    {contact.form.submit}
                </Submit>
            </div>
        </form>
    );
};

export default ContactForm;
