import { App } from "@/types/App";

import { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<App>({
    darkmode: false,
    setDarkmode: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [darkmode, setDarkmode] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ darkmode, setDarkmode }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
