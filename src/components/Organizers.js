import React from 'react';
import styles from './Organizers.module.scss';
import ieee from '../imgs/ieee.png';
import signal from '../imgs/signal.png';
import caai from '../imgs/caai.png'

const Organizers = () => (
    <div className={styles['organizer-header']}>
        <div className={styles['header-wrapper']}>
            <h3>Organizers</h3>
        </div>
        <a href="https://www.caai.cn/" target="_blank"><img className={styles['caai']} src={caai} /></a>
    </div>
)

export default Organizers;