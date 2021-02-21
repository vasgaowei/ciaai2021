import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import styles from './Dates.module.scss';

const ImportantDate = ({ year, month, day, title, date }) => (
    <div className={styles['important-date-wrapper']}>
        <div className={styles['date-wrapper']}>
            <span>{month}</span>
            <span>{day}</span>
        </div>
        <div className={styles['important-date-title']}>
            <AddToCalendar event={{
                title: title,
                description: '',
                location: 'Toronto, ON',
                startTime: date,
                endTime: date
            }} buttonWrapperClass={styles['date-btn-wrapper']} buttonLabel={title}/>
        </div>
    </div>
);

const Dates = () => (
    <div className={styles['dates-wrapper']}>
        <div className={styles['dates-header-wrapper']}>
            <h3>Deadline Dates</h3>
        </div>
        <div>
            <ImportantDate year='2021' month='April' day='18' date='2021-04-18T00:00-05:00' title='Paper Submission Due' />
            <ImportantDate year='2021' month='May' day='08' date='2021-05-08T00:00-05:00' title='Notification of Paper Acceptance' />
            <ImportantDate year='2021' month='May' day='20' date='2021-05-20T00:00-05:00' title='Camera-ready Papers Due' />
            <ImportantDate year='2021' month='May' day='29' date='2021-05-29T00:00-05:00' title='Conference' />
        </div>
    </div>
);

export default Dates;