import { useState } from "react";
import { Btn } from "./lib/Btn";
import Input from "./lib/Input";
import RadioBtn from "./lib/RadioBtn";
const TransactionForm = ({ addTransaction, balance, setBalance }) => {
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("deposit");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);
    const updatedBalance =
      transactionType === "deposit"
        ? balance + transactionAmount
        : balance - transactionAmount;
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
          id="withdraw"
          label="Withdraw"
          checked={transactionType === "withdrawal"}
          onChange={() => setTransactionType("withdrawal")}
        />
      </fieldset>
      <Btn type="submit" label="Submit" />
    </form>
  );
};
export default TransactionForm;
