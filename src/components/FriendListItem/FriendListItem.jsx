import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusclassName = isOnline ? css.isOnline : css.isOffline;

  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusclassName}>{isOnline ? 'online' : 'offline'}</p>
    </div>
  );
};

export default FriendListItem;
