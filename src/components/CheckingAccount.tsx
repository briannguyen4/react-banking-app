import React from "react";
import { useBankingContext } from "../contexts/BankingContext";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";

function CheckingAccount() {
  const {
    checkingTransactions,
    addCheckingTransaction,
    checkingBalance,
    setCheckingBalance,
    setSavingsBalance,
    addSavingsTransaction,
    savingsBalance,
  } = useBankingContext();

  return (
    <div>
      <h2>Checking Account Transactions</h2>
      <h3>Total Balance: {checkingBalance}</h3>
      <TransactionsList transactions={checkingTransactions} />
      <TransactionForm
        account="checking"
        addTransaction={addCheckingTransaction}
        balance={checkingBalance}
        setBalance={setCheckingBalance}
        otherBalance={savingsBalance}
        setOtherBalance={setSavingsBalance}
        addOtherTransaction={addSavingsTransaction}
      />
      {/* <input value type="text" onChange />
            <Btn fn={addCheckingTransaction} btnText={"Add transaction"} /> */}
    </div>
  );
}
export default CheckingAccount;
