import {Link} from 'react-router-dom';
import styles from './NotFound.module.scss'
import React from "react";

const Page404: React.FC = () => {
    return <div>
        <h2>Oops. This page does not exist.</h2>
        <div className={styles.button_wrapper}><Link className={styles.button} to={'/'}>Back to main page</Link></div>
    </div>
};


export default Page404;