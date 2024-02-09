import { useCheckingContext } from "../contexts/CheckingContext";
import { Btn } from "./lib/Btn";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";

function CheckingAccount() {
    const { checkingTransactions, addCheckingTransaction, checkingBalance } =
        useCheckingContext();

    return (
        <div>
            <h2>Checking Account Transactions</h2>
            <h3>Total Balance: {checkingBalance}</h3>
            <TransactionsList transactions={checkingTransactions} />
            <TransactionForm />
            {/* <input value type="text" onChange />
            <Btn fn={addCheckingTransaction} btnText={"Add transaction"} /> */}
        </div>
    );
}
export default CheckingAccount;
