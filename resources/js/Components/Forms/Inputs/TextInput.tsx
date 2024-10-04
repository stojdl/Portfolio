import { TextInputProps } from "@/types/TextInput";

const TextInput = (props: TextInputProps) => {
    const { error, className } = props;
    return (
        <>
            <input
                type="text"
                className={
                    `w-full placeholder-neutral-500 dark:placeholder-neutral-200 dark:bg-neutral-700 border-none outline outline-1 rounded ${error && "outline-red-500"}` +
                    className
                }
                {...props}
            />
            {error && <p className="text-red-500">{error}</p>}
        </>
    );
};

export default TextInput;
