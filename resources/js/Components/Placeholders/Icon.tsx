import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
    rounded?: boolean;
}

const IconPlaceholder = (props: Props) => {
    const { rounded = false } = props;
    return rounded ? (
        <div {...props} className="flex w-8 h-8 rounded-full border" />
    ) : (
        <div {...props} className="border w-8 h-8 rounded" />
    );
};

export default IconPlaceholder;
