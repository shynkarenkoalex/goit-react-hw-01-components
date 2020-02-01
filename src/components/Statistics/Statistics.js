import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({stats}) {
    return (
        <ul className={styles.statList}>
            {stats.map(stat=>(
                <li key={stat.id} className={styles.item}>
                    <span className={styles.label}>{stat.label} </span>
                    <span className={styles.percentage}>{stat.percentage}</span>
                </li>
            ))}
        </ul>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};

export default Statistics;