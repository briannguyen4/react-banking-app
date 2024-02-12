import { useSavingsContext } from "../contexts/SavingsContext";
import { Btn } from "./lib/Btn";
import TransactionsList from "./TransactionsList";
import TransactionForm from "./TransactionForm";

function SavingsAccount() {
  const {
    savingsTransactions,
    addSavingsTransaction,
    savingsBalance,
    setSavingsBalance,
  } = useSavingsContext();

  return (
    <div>
      <h2>Savings Account Transactions</h2>
      <h3>Total Balance: {savingsBalance}</h3>
      <TransactionsList transactions={savingsTransactions} />
      <TransactionForm
        addTransaction={addSavingsTransaction}
        balance={savingsBalance}
        setBalance={setSavingsBalance}
      />
      {/* <input
                value={newItem}
                type="text"
                onChange={(e) => setNewItem(e.target.value)}
            />
            <Btn fn={handleAdd} btnText={"Add item"} /> */}
    </div>
  );
}
export default SavingsAccount;
