import { useState } from "react";
import { Btn } from "./lib/Btn";
import { addTran } from "./CheckingAccount";
import { useCheckingContext } from "../contexts/CheckingContext";
import { useSavingsContext } from "../contexts/SavingsContext";

const TransactionForm = () => {
    const { addCheckingTransaction } = useCheckingContext();
    const { addSavingsTransaction } = useSavingsContext();
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("deposit");

    const handleSubmit = (e) => {
        e.preventDefault();
        const transaction = {
            type: transactionType,
            amount: parseFloat(amount),
        };
        console.log(transaction);
        addCheckingTransaction(transaction);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount:
                <input
                    type="number"
                    onInput={(e) => setAmount(e.target.value)}
                />
            </label>
            <fieldset>
                <legend>
                    Transaction type
                    <input
                        type="radio"
                        checked={transactionType === "deposit"}
                        onChange={() => setTransactionType("deposit")}
                    />{" "}
                    Deposit
                    <input
                        type="radio"
                        checked={transactionType === "withdrawal"}
                        onChange={() => setTransactionType("withdrawal")}
                    />{" "}
                    Withdrawal
                </legend>
            </fieldset>
            <Btn type="submit" label="Submit" />
        </form>
    );
};
export default TransactionForm;
