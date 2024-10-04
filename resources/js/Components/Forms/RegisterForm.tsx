import { FormEventHandler } from "react";

import PrimaryButton from "@/Components/Forms/Buttons/PrimaryButton";

import { Link, useForm } from "@inertiajs/react";
import TextInput from "@/Components/Forms/Inputs/TextInput";

const RegisterForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    return (
        <form
            onSubmit={submit}
            className="min-h-noNavNoFooterScreen p-4 flex flex-col justify-center items-center"
        >
            <div className="space-y-4 max-w-sm">
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    placeholder="Jméno"
                    autoComplete="name"
                    onChange={(e) => setData("name", e.target.value)}
                    error={errors.name}
                    required
                />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="E-mail"
                    autoComplete="username"
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                    required
                />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    onChange={(e) => setData("password", e.target.value)}
                    error={errors.password}
                    required
                />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    error={errors.password_confirmation}
                    required
                />

                <div className="flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
