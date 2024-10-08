import { SubmitProps } from "@/types/Submit";
import { LuSendHorizonal } from "react-icons/lu";

const Submit = (props: SubmitProps) => {
    const { children, icon, arrow } = props;
    return (
        <button
            type="submit"
            className="w-full px-4 py-2 flex justify-center items-center border rounded space-x-2 bg-slate-200 dark:bg-slate-700 md:w-max md:px-6 hover:bg-slate-300 dark:hover:bg-slate-600 disabled:cursor-not-allowed"
            {...props}
        >
            {icon && icon}
            <span>{children}</span>
            {arrow && <LuSendHorizonal />}
        </button>
    );
};

export default Submit;
