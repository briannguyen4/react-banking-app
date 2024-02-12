import { useState } from "react";
import { Btn } from "./lib/Btn";
import Input from "./lib/Input";
import RadioBtn from "./lib/RadioBtn";
const TransactionForm = ({
    account,
    addTransaction,
    balance,
    setBalance,
    otherBalance,
    setOtherBalance,
    addOtherBalance,
}) => {
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState("deposit");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "") return;
        const transactionAmount = parseFloat(amount);
        let updatedBalance = balance;
        if (transactionType === "deposit") {
            updatedBalance += transactionAmount;
        } else if (transactionType === "withdrawal") {
            updatedBalance -= transactionAmount;
        }
        if (transactionType === "transfer sent") {
            if (account === "checking") {
                let savingsBalance = otherBalance;
                savingsBalance += transactionAmount;
                setOtherBalance(savingsBalance);
                addOtherBalance({
                    type: "transfer received",
                    amount: transactionAmount,
                });
                updatedBalance -= transactionAmount;
            } else {
                let checkingsBalance = otherBalance;
                checkingsBalance += transactionAmount;
                setOtherBalance(checkingsBalance);
                addOtherBalance({
                    type: "transfer received",
                    amount: transactionAmount,
                });
                updatedBalance -= transactionAmount;
            }
        }
        const transaction = {
            type: transactionType,
            amount: transactionAmount,
        };
        addTransaction(transaction);
        setBalance(updatedBalance);
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="amount"
                type="number"
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <fieldset>
                <legend>Transaction type</legend>
                <RadioBtn
                    id="deposit"
                    label="Deposit"
                    checked={transactionType === "deposit"}
                    onChange={() => setTransactionType("deposit")}
                />
                <RadioBtn
                    id="withdrawal"
                    label="Withdrawal"
                    checked={transactionType === "withdrawal"}
                    onChange={() => setTransactionType("withdrawal")}
                />
                <RadioBtn
                    id="transfer"
                    label="Transfer"
                    checked={transactionType === "transfer sent"}
                    onChange={() => setTransactionType("transfer sent")}
                />
            </fieldset>
            <Btn type="submit" label="Submit" />
        </form>
    );
};
export default TransactionForm;
