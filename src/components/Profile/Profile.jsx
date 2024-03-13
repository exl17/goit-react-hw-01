import React from 'react';
import styles from './Profile.module.css';

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
         <p className={styles.nameUser}>{name}</p>
         <p className={styles.tagUser}>@{tag}</p>
         <p className={styles.locUser}>{location}</p>
       </div>
      </div>

      <ul className={styles.statsList}>
       <li>
         <span className={styles.stats}>Followers</span>
         <span>{stats.followers}</span>
       </li>
       <li>
         <span className={styles.stats}>Views</span>
         <span>{stats.views}</span>
       </li>
       <li>
         <span className={styles.stats}>Likes</span>
         <span>{stats.likes}</span>
       </li>
     </ul>

    </div>
  );
};

export default Profile;
