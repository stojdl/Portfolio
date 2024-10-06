import { TextInputProps } from "@/types/TextInput";

const TextInput = (props: TextInputProps) => {
    const { error, className } = props;
    return (
        <>
            <input
                type="text"
                className={
                    `w-full placeholder-neutral-500 dark:placeholder-neutral-300 bg-slate-50 dark:bg-slate-700 border-none outline outline-1 outline-slate-400 rounded focus:ring-slate-500 dark:focus:ring-slate-100 ${error && "outline-red-500"}` +
                    className
                }
                {...props}
            />
            {error && <p className="text-red-500">{error}</p>}
        </>
    );
};

export default TextInput;
