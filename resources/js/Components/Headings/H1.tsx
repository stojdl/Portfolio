import { ReactNode } from "react";

const H1 = ({ children }: { children: ReactNode }) => {
    return <h1 className="text-3xl sm:text-4xl md:text-5xl">{children}</h1>;
};

export default H1;
