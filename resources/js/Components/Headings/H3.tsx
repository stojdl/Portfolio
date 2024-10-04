import { ReactNode } from "react";

const H3 = ({ children }: { children: ReactNode }) => {
    return <h3 className="text-xl md:text-2xl">{children}</h3>;
};

export default H3;
