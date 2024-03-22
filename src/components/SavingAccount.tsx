import { useBankingContext } from "../contexts/BankingContext";
import TransactionsList from "./TransactionsList";
import TransactionForm from "./TransactionForm";
import { BankingContextType } from "../types";
import { useNavigate } from "react-router-dom";

function SavingsAccount() {
  const {
    savingsTransactions,
    addSavingsTransaction,
    savingsBalance,
    setSavingsBalance,
    setCheckingBalance,
    addCheckingTransaction,
    checkingBalance,
  } = useBankingContext() as BankingContextType;

  const navigate = useNavigate();

  return (
    <div>
      <h1>Savings Account Information</h1>

      <h2>Total Balance: {savingsBalance}</h2>
      <h3>Transactions:</h3>
      <TransactionsList transactions={savingsTransactions} />
      <TransactionForm
        account="savings"
        addTransaction={addSavingsTransaction}
        balance={savingsBalance}
        setBalance={setSavingsBalance}
        otherBalance={checkingBalance}
        setOtherBalance={setCheckingBalance}
        addOtherTransaction={addCheckingTransaction}
      />
      {/* <input
                value={newItem}
                type="text"
                onChange={(e) => setNewItem(e.target.value)}
            />
            <Btn fn={handleAdd} btnText={"Add item"} /> */}
      <button onClick={() => navigate("/")}>Go back to accounts summary</button>
    </div>
  );
}
export default SavingsAccount;
