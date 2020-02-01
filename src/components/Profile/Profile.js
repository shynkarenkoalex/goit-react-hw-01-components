import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({user}) {
    let {name, tag, location, avatar, stats} = user;
    let {followers, views, likes} = stats;
    return (
        <div className={styles.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt="user avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className="label">Followers </span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className="label">Views </span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className="label">Likes </span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.exact({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
}
export default Profile;