import { FormEventHandler } from "react";

import PrimaryButton from "@/Components/Forms/Buttons/PrimaryButton";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/Forms/Inputs/TextInput";
import Checkbox from "./Inputs/Checkbox";

const LoginForm = () => {
    const { status, canResetPassword } = usePage<{
        status: number;
        canResetPassword: boolean;
    }>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <form
            onSubmit={submit}
            className="min-h-noNavNoFooterScreen p-4 flex flex-col justify-center items-center"
        >
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="space-y-4 max-w-sm">
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="E-mail"
                    autoComplete="username"
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                />
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    onChange={(e) => setData("password", e.target.value)}
                    error={errors.password}
                />
                <Checkbox
                    name="remember"
                    label="Zůstaň přihlášen"
                    checked={data.remember}
                    onChange={(e: any) => setData("remember", e.target.checked)}
                />
                <div className="flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-500 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
