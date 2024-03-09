import React from "react";
import { createContext, useContext, useState } from "react";

const BankingContext = createContext();

export const useBankingContext = () => useContext(BankingContext);

export const BankingProvider = ({ children }) => {
    const [checkingTransactions, setCheckingTransactions] = useState([
        {type: "deposit", amount: 100 },
        {type: "withdrawal", amount: 20 },
    ]);

    const [checkingBalance, setCheckingBalance] = useState(80);

    const [savingsTransactions, setSavingsTransactions] = useState([
        {type: "deposit", amount: 1000 },
        {type: "withdrawal", amount: 200 },
    ]);

    const [savingsBalance, setSavingsBalance] = useState(800);

    const addCheckingTransaction = (transaction) => {
        setCheckingTransactions([...checkingTransactions, transaction]);
    };

    const addSavingsTransaction = (transaction) => {
        setSavingsTransactions([...savingsTransactions, transaction]);
    };

    return (
        <BankingContext.Provider
            value={{
                checkingTransactions,
                addCheckingTransaction,
                checkingBalance,
                setCheckingBalance,
                savingsTransactions,
                addSavingsTransaction,
                savingsBalance,
                setSavingsBalance,
            }}
        >
            {children}
        </BankingContext.Provider>
    );
};
