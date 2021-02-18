import React from 'react';

import styles from './Header.module.scss';

// class Header extends React.PureComponent {
//     constructor() {
//         super();
//     };

//     render = () => (
//         <div className={styles['main-header-background']}>
//             <div className={styles['header-content-wrapper']}>
//                 <div className={styles['header-content']}>
//                     <h1>DSLW 2021</h1>
//                     <h3>IEEE Data Science and Learning Workshop</h3>
//                     <h4>June 05 - 06, 2021, Toronto, ON, Canada</h4>
//                 </div>
//             </div>
//         </div>
//     );
// };
const Header = () => (
    <div className={styles['main-header-background']}>
        <div className={styles['header-content-wrapper']}>
            <div className={styles['header-content']}>
                <h1>CIAAI 2021</h1>
                <h3>CAAI International Conference on Artificial Intelligence</h3>
                <h4>May 29th - 30th, 2021, Hangzhou, China</h4>
            </div>
        </div>
    </div>
);

export default Header;