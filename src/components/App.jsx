import css from './App.module.css';
import Profile from './profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import userData from './data/userData.json';
import friends from './data/friends.json';
import transactionList from './data/transactions.json';

function App() {
  return (
    <div className={css.appContainer}>
      <h1 className={css.appTittle}>My Profile</h1>
      <Profile {...userData} />
      <h1 className={css.appTittle}>My friends</h1>
      <FriendList friends={friends} />
      <h1 className={css.appTittle}>My Transaction history</h1>
      <TransactionHistory transactionList={transactionList} />
    </div>
  );
}

export default App;
