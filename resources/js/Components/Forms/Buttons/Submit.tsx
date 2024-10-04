import { SubmitProps } from "@/types/Submit";

const Submit = (props: SubmitProps) => {
    const { children } = props;
    return (
        <button
            type="submit"
            className="w-full px-4 py-2 border rounded md:w-max md:px-6 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed"
            {...props}
        >
            {children}
        </button>
    );
};

export default Submit;
