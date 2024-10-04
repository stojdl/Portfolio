import { ReactNode } from "react";

const H4 = ({ children }: { children: ReactNode }) => {
    return <h4 className="text-xl md:text-2xl">{children}</h4>;
};

export default H4;
