import React from 'react';
import styles from './Patrons.module.scss';
import ubc from '../imgs/ubc.png';
import uot from '../imgs/uot.png';

const Patrons = () => (
    <div className={styles['patrons-header']}>
        <div className={styles['header-wrapper']}>
            <h3>Bronze Patrons</h3>
        </div>
        <a href="https://www.ubc.ca" target="_blank">
            <img className={styles['ubc']} src={ubc} />
        </a>
        <a href="https://www.utoronto.ca" target="_blank">
            <img className={styles['uot']} src={uot} />
        </a>
    </div>
)

export default Patrons;