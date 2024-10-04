import { FormProps } from "@/types/Form";

const Form = (props: FormProps) => {
    const { children } = props;
    return <form {...props}>{children}</form>;
};

export default Form;
