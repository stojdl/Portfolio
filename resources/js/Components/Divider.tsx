import { DividerProps } from "@/types/Divider";

const Divider = (props: DividerProps) => {
    const { heading, icon, className } = props;
    return (
        <div
            {...props}
            className={`flex w-full pt-1 items-center space-x-1 cursor-default ${className}`}
        >
            {heading && (
                <p className="pl-2 text-sm flex space-x-1 items-center">
                    {icon && icon}
                    <span className="w-max">{heading}</span>
                </p>
            )}
            <div className="w-full border-t" />
        </div>
    );
};

export default Divider;
