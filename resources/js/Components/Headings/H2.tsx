import { ReactNode } from "react";

const H2 = ({ children }: { children: ReactNode }) => {
    return <h2 className="text-2xl sm:text-3xl md:text-4xl">{children}</h2>;
};

export default H2;
