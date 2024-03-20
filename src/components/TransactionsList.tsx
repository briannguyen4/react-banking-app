// Define the type for each transaction object
interface Transaction {
    type: string;
    amount: number;
}

const TransactionsList = ({
    transactions,
}: {
    transactions: Transaction[];
}) => {
    return (
        <ul>
            {transactions.map((transaction, index) => (
                <li key={index}>
                    {transaction.type}: {transaction.amount}
                </li>
            ))}
        </ul>
    );
};
export default TransactionsList;
