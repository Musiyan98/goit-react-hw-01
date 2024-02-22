import css from './TransactionHistory.module.css';

function TransactionHistory({ transactionList }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tHead}>
          <th className={css.tItem}>Type</th>
          <th className={css.tItem}>Amount</th>
          <th className={css.tItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionList.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <tr className={css.tbody}>
      <td className={css.tbItem}>{type}</td>
      <td className={css.tbItem}>{amount}</td>
      <td className={css.tbItem}>{currency}</td>
    </tr>
  );
};

export default TransactionHistory;
