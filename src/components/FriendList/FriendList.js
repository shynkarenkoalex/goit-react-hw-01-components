import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
     
    return (
        <ul className={styles.friendList}>
            {friends.map(
                item => (
                    <FriendListItem key = {item.id} isOnline = {item.isOnline} avatar = {item.avatar} name = {item.name}/>
                )
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
};

export default FriendList;