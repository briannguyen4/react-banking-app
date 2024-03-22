import { useBankingContext } from "../contexts/BankingContext";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";
import { BankingContextType } from "../types";
import { useNavigate } from "react-router-dom";

const CheckingAccount = () => {
  const {
    checkingTransactions,
    addCheckingTransaction,
    checkingBalance,
    setCheckingBalance,
    setSavingsBalance,
    addSavingsTransaction,
    savingsBalance,
  } = useBankingContext() as BankingContextType;

  const navigate = useNavigate();

  return (
    <div>
      <h1>Checking Account Information</h1>

      <h2>Total Balance: {checkingBalance}</h2>
      <h3>Transactions:</h3>
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
      <button onClick={() => navigate("/")}>Go back to accounts summary</button>
    </div>
  );
};
export default CheckingAccount;
