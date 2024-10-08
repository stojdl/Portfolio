import { ShowKeyTileProps } from "@/types/ShowKeyTile";
import { MdOutlineTimerOff } from "react-icons/md";

const ShowOfferTile = (props: ShowKeyTileProps) => {
    const { className, keyFor, value, valid, used } = props;
    return (
        <div
            {...props}
            className={`w-full px-2 py-4 flex items-center justify-between bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 border border-slate-400 rounded drop-shadow-xl ${className}`}
        >
            <div className="flex flex-col space-y-2 font-bold">
                <div>Pro: {keyFor}</div>
                <div>{value}</div>
            </div>
            <div className="flex flex-col space-y-2 italic">
                <div>Platný: {valid ? "Ano" : "Ne"}</div>
                <div>Byl použit: {used ? "Ano" : "Ne"}</div>
            </div>
            <MdOutlineTimerOff className="w-6 h-6" />
        </div>
    );
};

export default ShowOfferTile;
