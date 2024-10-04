import { CheckboxProps } from "@/types/Checkbox";

const Checkbox = (props: CheckboxProps) => {
    const { className, label } = props;
    return (
        <label className="group flex items-center">
            <input
                {...props}
                type="checkbox"
                className={"rounded bg-black" + className}
            />
            <span className="ms-2 text-sm text-gray-500">{label}</span>
        </label>
    );
};

export default Checkbox;
