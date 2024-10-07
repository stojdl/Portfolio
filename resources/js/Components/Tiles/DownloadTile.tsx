import { DownloadTileProps } from "@/types/DownloadTile";
import { IoIosLock } from "react-icons/io";
import { IoDownloadOutline, IoLockClosedOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

const DownloadTile = (props: DownloadTileProps) => {
    const { children, locked = false } = props;
    return (
        <div
            {...props}
            className="w-full px-2 py-4 flex justify-between items-center border rounded drop-shadow-lg bg-slate-200 dark:bg-slate-700"
        >
            <p>{children}</p>
            <div className="flex items-center space-x-2">
                {locked && <IoIosLock className="w-6 h-6" />}
                <IoDownloadOutline className="w-6 h-6" />
            </div>
        </div>
    );
};

export default DownloadTile;
