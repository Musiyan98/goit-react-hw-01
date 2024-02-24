import css from './Transaction.module.css';

const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <tr className={css.tRow}>
      <td className={css.tbItem}>{type}</td>
      <td className={css.tbItem}>{amount}</td>
      <td className={css.tbItem}>{currency}</td>
    </tr>
  );
};

export default Transaction;
