import css from './FriendList.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusclassName = isOnline ? css.isOnline : css.isOffline;

  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusclassName}>{isOnline ? 'online' : 'ofline'}</p>
    </div>
  );
};

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
