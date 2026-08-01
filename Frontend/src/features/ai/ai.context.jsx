import { createContext, useState } from "react";

export const AIContext = createContext();

export function AIProvider({ children }) {
    const [report, setReport] = useState(null);

    return (
        <AIContext.Provider
            value={{
                report,
                setReport,
            }}
        >
            {children}
        </AIContext.Provider>
    );
}