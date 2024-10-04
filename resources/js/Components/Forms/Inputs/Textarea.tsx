import { TextareaProps } from "@/types/Textarea";

const Textarea = (props: TextareaProps) => {
    const { label, error } = props;

    return (
        <>
            <textarea
                className={`w-full min-h-48 placeholder-neutral-500 dark:placeholder-neutral-200 dark:bg-neutral-700 border-none outline outline-1 ${error && " outline-red-500"}`}
                {...props}
            />
            {error && <p className="text-red-500">{error}</p>}
        </>
    );
};

export default Textarea;
