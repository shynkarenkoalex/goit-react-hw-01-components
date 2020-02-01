import React from 'react';
import styles from './FriendList.module.css';

function FriendListItem({id, avatar, name, isOnline}) {    
    return (
        <li key={id} className={styles.item}>
            <span className={isOnline ? styles.online : styles.ofline}></span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;