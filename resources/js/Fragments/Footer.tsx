import { Link, usePage } from "@inertiajs/react";
import { version } from "react";
import { devDependencies } from "../../../package.json";
import Divider from "@/Components/Divider";
import { LuLanguages } from "react-icons/lu";
import { RiMenuSearchLine } from "react-icons/ri";

const Footer = () => {
    const { laravelVersion, phpVersion, navigation } = usePage<{
        laravelVersion: string;
        phpVersion: string;
        navigation: any;
    }>().props;

    const tailwindVersion = devDependencies.tailwindcss.split("^")[1];
    const year = new Date().getFullYear();

    const Links = [
        [navigation.collaboration, route("welcome")],
        [navigation.projects, route("projects")],
        [navigation.contact, route("contact")],
        [navigation.download, route("download")],
    ];

    return (
        <footer className="h-64 px-4 flex justify-center items-center bg-slate-950 text-neutral-300 sm:p-10 md:px-0 md:py-16">
            <div className="w-full flex justify-between md:max-w-lg lg:max-w-2xl">
                <div className="w-1/2 md:w-1/3">
                    {year}&nbsp;Bedřich Štojdl -
                    <p>
                        Laravel&nbsp;v
                        {laravelVersion} (PHP&nbsp;v{phpVersion}),
                    </p>
                    <p>React&nbsp;v{version},</p>{" "}
                    <p>
                        TailwindCSS&nbsp;v
                        {tailwindVersion}
                    </p>
                    <p>Vše v jednom Inertia projektu</p>
                </div>
                <div className="w-1/3 flex flex-col items-end md:w-1/2 md:flex-row md:items-start md:space-x-8">
                    <div className="w-full flex flex-col space-y-1 items-end md:space-y-2">
                        <Divider heading="Menu" icon={<RiMenuSearchLine />} />
                        {Links.map((link) => (
                            <Link href={link[1]}>{link[0]}</Link>
                        ))}
                    </div>
                    <div className="w-full flex flex-col space-y-1 items-end md:space-y-2">
                        <Divider
                            heading={navigation.languages}
                            icon={<LuLanguages />}
                        />
                        <Link
                            href={route("lang.change", { lang: "cs" })}
                            method="post"
                            as="button"
                        >
                            <p className="flex items-center space-x-2">
                                <span className="text-sm">cs</span>
                                <span>Čeština</span>
                            </p>
                        </Link>
                        <Link
                            href={route("lang.change", { lang: "en" })}
                            method="post"
                            as="button"
                        >
                            <p className="flex items-center space-x-2">
                                <span className="text-sm">en</span>
                                <span>English</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
