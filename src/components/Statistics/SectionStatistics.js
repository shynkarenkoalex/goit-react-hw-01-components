import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function SectionStatistics({title, children}) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className='title'>{title}</h2>}
            {children}
        </section>
    )
}

SectionStatistics.defaultProps = {
    title: ''
};

SectionStatistics.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default SectionStatistics;