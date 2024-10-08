import { AppContext } from "@/Contexts/App";
import { User } from "@/types/User";
import { Link, usePage } from "@inertiajs/react";
import React, { useContext, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaHome, FaRegWindowClose } from "react-icons/fa";
import { GiUnlocking } from "react-icons/gi";
import { MdOutlineLightMode, MdOutlineLocalOffer } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

const AuthenticatedNavbar = () => {
    const { auth, navigation } = usePage<{
        auth: { user: User };
        navigation: any;
    }>().props;
    const { setDarkmode } = useContext(AppContext);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
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
                </div>
            )}

            <nav className="hidden md:flex fixed flex-col justify-between h-screen w-64 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-900 dark:to-slate-950">
                <div className="h-16 px-8 flex items-center">
                    <Link href={route("welcome")}>
                        <FaHome className="w-6 h-6" />
                    </Link>
                </div>
                <div className="px-8 flex flex-col space-y-8">
                    <Link href={route("offers")}>
                        <p className="flex items-center space-x-2">
                            <MdOutlineLocalOffer className="w-6 h-6" />
                            <span>Nabídky</span>
                        </p>
                    </Link>
                    <Link href={route("keys")}>
                        <p className="flex items-center space-x-2">
                            <GiUnlocking className="w-6 h-6" />
                            <span>Přístupové kódy</span>
                        </p>
                    </Link>
                </div>
                <div className="h-16 px-8 flex items-center justify-between">
                    <MdOutlineLightMode
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setDarkmode((p: boolean) => !p)}
                    />
                    <Link href="">
                        <p className="flex items-center space-x-2">
                            <RiAccountCircleLine className="w-6 h-6" />

                            <span className="text-lg">{auth.user.name}</span>
                        </p>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default AuthenticatedNavbar;
