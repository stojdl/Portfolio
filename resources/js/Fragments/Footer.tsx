import { Link, usePage } from "@inertiajs/react";
import { version } from "react";
import { devDependencies } from "../../../package.json";
import Divider from "@/Components/Divider";
import { LuLanguages } from "react-icons/lu";
import { RiMenuSearchLine, RiTailwindCssFill } from "react-icons/ri";
import { FaExternalLinkAlt, FaReact, FaLaravel } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const Footer = () => {
    const { laravelVersion, phpVersion, mysqlVersion, navigation } = usePage<{
        laravelVersion: string;
        phpVersion: string;
        mysqlVersion: string;
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
        <footer className="h-80 px-4 flex flex-col justify-center items-center bg-slate-950 text-neutral-300 sm:p-10 md:px-0 md:py-16">
            <div className="w-full pb-4 flex justify-between border-b md:max-w-lg lg:max-w-2xl">
                <div className="w-3/4 md:w-1/2">
                    {navigation.footer.text}:
                    <p className="italic flex items-center space-x-2">
                        <FaLaravel />
                        <span>
                            Laravel&nbsp;v
                            {laravelVersion} (PHP&nbsp;v{phpVersion}),
                        </span>
                    </p>
                    <p className="italic flex items-center space-x-2">
                        <FaReact />
                        <span>React&nbsp;v{version},</span>
                    </p>
                    <p className="italic flex items-center space-x-2">
                        <RiTailwindCssFill />
                        <span>
                            TailwindCSS&nbsp;v
                            {tailwindVersion},
                        </span>
                    </p>
                    <p className="italic flex items-center space-x-2">
                        <DiMysql />
                        <span>
                            MySQL&nbsp;v
                            {mysqlVersion}.
                        </span>
                    </p>
                    <p>{navigation.footer.text2}</p>
                    <p className="flex items-center space-x-1">
                        <span> {navigation.footer.text3}</span>
                        <a
                            href="https://www.heroku.com/home"
                            className="flex items-center space-x-2 hover:underline"
                        >
                            <span>Heroku</span>
                            <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                    </p>
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
            <p className="w-full py-2 md:max-w-lg lg:max-w-2xl">
                Bedřich Štojdl ({year})
            </p>
        </footer>
    );
};

export default Footer;
