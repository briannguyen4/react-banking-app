import { createContext, useContext, useState } from "react";

const SavingsContext = createContext();

export const useSavingsContext = () => useContext(SavingsContext);

export const SavingsProvider = ({ children }) => {
    const [savingsTransactions, setSavingsTransactions] = useState([
        { id: 1, type: "deposit", amount: 1000 },
        { id: 1, type: "withdrawal", amount: 200 },
    ]);
    const [savingsBalance, setSavingsBalance] = useState(800);

    // const handleDelete = (i) => {
    //     setList(list.filter((_, id) => id !== i));
    // };

    const addSavingsTransaction = (transaction) => {
        setSavingsTransactions([...savingsTransactions, transaction]);
    };

    return (
        <SavingsContext.Provider
            value={{
                savingsTransactions,
                addSavingsTransaction,
                savingsBalance,
                setSavingsBalance
            }}
        >
            {children}
        </SavingsContext.Provider>
    );
};
