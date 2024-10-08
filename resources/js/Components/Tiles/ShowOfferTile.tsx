import { ShowOfferTileProps } from "@/types/ShowOfferTile";

const ShowOfferTile = (props: ShowOfferTileProps) => {
    const { className, name, email, text } = props;
    return (
        <div
            {...props}
            className={`w-full px-2 py-4 flex flex-col space-y-4 bg-slate-300 dark:bg-slate-700 border border-slate-400 rounded drop-shadow-xl ${className}`}
        >
            <div className="flex flex-col space-y-2 font-bold md:flex-row md:space-y-0 md:space-x-8 ">
                <div>{name}</div>
                <div>{email}</div>
            </div>
            <div>{text}</div>
        </div>
    );
};

export default ShowOfferTile;
