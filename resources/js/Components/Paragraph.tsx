import { ReactNode } from "react";

const Paragraph = ({ children }: { children: ReactNode }) => {
    return <p className="text-justify">{children}</p>;
};

export default Paragraph;
