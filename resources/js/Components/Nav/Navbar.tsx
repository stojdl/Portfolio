import { User } from "@/types/User";
import { Link, usePage } from "@inertiajs/react";
import IconPlaceholder from "../Placeholders/Icon";
import { useContext, useState } from "react";
import Dropdown from "../Dropdown";
import Submit from "../Forms/Buttons/Submit";
import { AppContext } from "@/Contexts/App";

// icons
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { LuLanguages, LuLayoutDashboard } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import Divider from "../Divider";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
    const { auth, navigation } = usePage<{
        auth: { user: User };
        navigation: any;
    }>().props;

    console.log("route", route(`${route().current()}`), route("projects"));

    const { darkmode, setDarkmode } = useContext(AppContext);

    const [isOpen, setOpen] = useState(false);

    const Links = [
        [navigation.collaboration, route("welcome")],
        [navigation.projects, route("projects")],
        [navigation.contact, route("contact")],
        [navigation.download, route("download")],
    ];

    return (
        <>
            <div className="h-16" />
            <nav className="flex z-10 md:hidden fixed inset-0 h-16 p-4 justify-between items-center bg-slate-500 dark:bg-slate-900 text-white">
                <div className="w-1/2">
                    <Link href={route("welcome")} className="flex w-min">
                        <FaHome className="w-8 h-8" />
                    </Link>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="cursor-pointer">
                        <CgMenuGridO
                            onClick={() => setOpen(true)}
                            className="w-8 h-8"
                        />
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden fixed z-20 inset-0 flex flex-col justify-center w-full h-screen place-items-center bg-slate-500 dark:bg-slate-900 text-white">
                    <FaRegWindowClose
                        onClick={() => setOpen(false)}
                        className="absolute top-5 right-5 w-6 h-6 cursor-pointer"
                    />

                    <div className="px-4 w-full flex flex-col justify-center space-y-8 text-xl font-bold tracking-wide sm:px-8">
                        {Links.map((link, i) => (
                            <Link
                                key={i}
                                href={link[1]}
                                className={`${
                                    route(`${route().current()}`) == link[1] &&
                                    "text-slate-800"
                                }`}
                            >
                                {link[0]}
                            </Link>
                        ))}
                    </div>

                    <Divider
                        className="mt-16 pl-1"
                        heading="Jazyky"
                        icon={<LuLanguages />}
                    />

                    <div className="mt-8 px-4 w-full flex flex-col space-y-8 sm:px-8">
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

                    <Divider
                        className="mt-16 pl-1"
                        heading="Účet"
                        icon={<MdManageAccounts />}
                    />
                    <div className="mt-8 pl-4 w-full flex flex-col space-y-8 sm:pl-8">
                        {auth?.user ? (
                            <>
                                <Link href={route("offers")}>
                                    <p className="flex items-center space-x-2">
                                        <LuLayoutDashboard />
                                        <span>App -{">"}</span>
                                    </p>
                                </Link>
                                <Link href={route("profile.edit")}>
                                    <p className="flex items-center space-x-2">
                                        <RiAccountCircleLine />
                                        <span>{auth.user.name}</span>
                                    </p>
                                </Link>
                                <Divider />
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    <p className="flex items-center space-x-2">
                                        <IoLogOutOutline />
                                        <span>Odhlásit</span>
                                    </p>
                                </Link>
                            </>
                        ) : (
                            <Link href={route("login")}>
                                <p className="flex items-center space-x-2">
                                    <IoLogInOutline />
                                    <span>Přihlásit</span>
                                </p>
                            </Link>
                        )}
                    </div>
                </div>
            )}

            <nav className="hidden md:flex fixed z-10 inset-0 h-16 p-8 justify-between items-center bg-slate-500 dark:bg-slate-900 text-white">
                <div className="w-1/3">
                    <Link href={route("welcome")} className="w-max block">
                        <FaHome className="w-6 h-6 hover:text-slate-300" />
                    </Link>
                </div>
                <div className="w-1/3 flex justify-center space-x-8 font-bold tracking-wide">
                    {Links.map((link, i) => (
                        <Link
                            key={i}
                            href={link[1]}
                            className={`${
                                route(`${route().current()}`) == link[1] &&
                                "text-slate-300"
                            } hover:text-slate-200`}
                        >
                            {link[0]}
                        </Link>
                    ))}
                </div>
                <div className="w-1/3 flex justify-end space-x-4">
                    <Dropdown
                        trigger={
                            <FaTools className="w-5 h-5 hover:text-slate-300" />
                        }
                    >
                        <Dropdown.Button
                            icon={
                                darkmode ? (
                                    <MdOutlineLightMode />
                                ) : (
                                    <MdOutlineDarkMode />
                                )
                            }
                            onClick={() => setDarkmode((p: boolean) => !p)}
                        >
                            {darkmode ? "Lightmode" : "Darkmode"}
                        </Dropdown.Button>
                        <Divider
                            className="text-neutral-500 dark:text-neutral-400"
                            heading="Jazyky"
                            icon={<LuLanguages />}
                        />
                        <Dropdown.Link
                            href={route("lang.change", { lang: "cs" })}
                            method="post"
                            as="button"
                            icon={<span className="text-sm">cs</span>}
                        >
                            Čeština
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("lang.change", { lang: "en" })}
                            method="post"
                            as="button"
                            icon={<span className="text-sm">en</span>}
                        >
                            English
                        </Dropdown.Link>
                        <Divider
                            className="text-neutral-500 dark:text-neutral-400"
                            heading="Účet"
                            icon={<MdManageAccounts />}
                        />
                        {auth?.user ? (
                            <>
                                <Dropdown.Link
                                    href={route("offers")}
                                    icon={<LuLayoutDashboard />}
                                >
                                    <span className="flex items-center space-x-2">
                                        <span>App</span> <FaArrowRightLong />
                                    </span>
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("profile.edit")}
                                    icon={<RiAccountCircleLine />}
                                >
                                    {auth.user.name}
                                </Dropdown.Link>
                                <Divider />
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    icon={<IoLogOutOutline />}
                                >
                                    Odhlásit
                                </Dropdown.Link>
                            </>
                        ) : (
                            <Dropdown.Link
                                href={route("login")}
                                icon={<IoLogInOutline />}
                            >
                                Přihlásit
                            </Dropdown.Link>
                        )}
                    </Dropdown>
                    {/* {auth?.user ? (
                        <Link href={route("dashboard")} className="">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route("login")} className="">
                                Log in
                            </Link>
                            <Link href={route("register")} className="">
                                Register
                            </Link>
                        </>
                    )} */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
