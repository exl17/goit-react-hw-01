import React from 'react';
import styles from './Profile.module.css'; // Импорт CSS модуля

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={styles.statsList}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
