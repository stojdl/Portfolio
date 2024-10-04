import { AnchorProps } from "@/types/Anchor";

const Anchor = (props: AnchorProps) => {
    const { children } = props;

    return (
        <a
            className="block border px-4 py-2 text-center rounded md:w-max md:px-6 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-neutral-200"
            target="blank"
            {...props}
        >
            {children}
        </a>
    );
};

export default Anchor;
