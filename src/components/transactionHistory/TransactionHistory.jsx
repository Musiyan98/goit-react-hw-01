import css from './TransactionHistory.module.css';
import Transaction from '../Transaction/Transaction';

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

export default TransactionHistory;
