import { useBankingContext } from "../contexts/BankingContext";
import TransactionsList from "./TransactionsList";
import TransactionForm from "./TransactionForm";
import { BankingContextType } from "../types";

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

    return (
        <div>
            <h2>Savings Account Transactions</h2>
            <h3>Total Balance: {savingsBalance}</h3>
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
        </div>
    );
}
export default SavingsAccount;
