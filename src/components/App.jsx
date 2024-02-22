import Profile from './profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import userData from './data/userData.json';
import friends from './data/friends.json';
import transactionList from './data/transactions.json';

function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactionList={transactionList} />
    </>
  );
}

export default App;
