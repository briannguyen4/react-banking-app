const TransactionsList = ({ transactions }) => {
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
