import { FormProps } from "@/types/Form";

import Submit from "./Buttons/Submit";
import TextInput from "./Inputs/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent } from "react";
import Textarea from "./Inputs/Textarea";

const ContactForm = (props: FormProps) => {
    const { contact } = usePage<{ contact: any }>().props;

    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        content: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("send"));
    };

    // console.log("data: ", data);
    // console.log("errors: ", errors);
    return (
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
                    name="content"
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    placeholder={contact.form.offer}
                    error={errors.content}
                />
            </div>
            <div>
                <Submit disabled={processing}>{contact.form.submit}</Submit>
            </div>
        </form>
    );
};

export default ContactForm;
