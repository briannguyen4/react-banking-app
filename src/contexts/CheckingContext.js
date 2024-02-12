import { createContext, useContext, useState } from "react";

const CheckingContext = createContext();

export const useCheckingContext = () => useContext(CheckingContext);

export const CheckingProvider = ({ children }) => {
    const [checkingTransactions, setCheckingTransactions] = useState([
        { id: 1, type: "deposit", amount: 100 },
        { id: 1, type: "withdrawal", amount: 20 },
    ]);
    const [checkingBalance, setCheckingBalance] = useState(80);

    // const handleDelete = (i) => {
    //     setList(list.filter((_, id) => id !== i));
    // };

    const addCheckingTransaction = (transaction) => {
        setCheckingTransactions([...checkingTransactions, transaction]);
    };

    return (
        <CheckingContext.Provider
            value={{
                checkingTransactions,
                addCheckingTransaction,
                checkingBalance,
                setCheckingBalance,
            }}
        >
            {children}
        </CheckingContext.Provider>
    );
};
