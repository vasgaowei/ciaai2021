import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => (
    <div className={styles['navbar-wrapper']}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/committee">Committee</Link></li>
            <li><Link to="/call_for_paper">Call for Papers</Link></li>
            <li><Link to="/submission">Paper Submission</Link></li>
            <li><Link to="/presentations">Presentation Instructions</Link></li>
            <li><Link to="/instruction">Instructions for Authors</Link></li>
            <li><Link to="/deadlines">Deadline Dates</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/speakers">Keynote Speakers</Link></li>
            <li><Link to="/technical">Technical Program</Link></li>
            <li><Link to="/accommodation">Travel and Accommodation</Link></li>
            <li><Link to="/venue">Venue</Link></li>
            <li><Link to="/social">Social Program</Link></li>
            <li><Link to="/awards">Awards</Link></li>
        </ul>
    </div>
);

export default Navbar;

