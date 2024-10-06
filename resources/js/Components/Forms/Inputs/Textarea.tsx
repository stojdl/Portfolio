import { TextareaProps } from "@/types/Textarea";

const Textarea = (props: TextareaProps) => {
    const { label, error } = props;

    return (
        <>
            <textarea
                className={`w-full min-h-48 placeholder-neutral-500 dark:placeholder-neutral-300 bg-slate-50 dark:bg-slate-700 border-none outline outline-1 outline-slate-400 rounded focus:ring-slate-500 dark:focus:ring-slate-100 ${error && " outline-red-500"}`}
                {...props}
            />
            {error && <p className="text-red-500">{error}</p>}
        </>
    );
};

export default Textarea;
