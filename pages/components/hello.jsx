import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Hello.module.css';
// import Anime from 'react-anime';

const Hello = () => {
    return (
        <div>
            
            <Link href='/components/countries'>
                {/* <div className={styles.enter}>Mochi</div> */}
                <h1 className= {styles.helloWorld}>Hello World</h1>
            </Link>

        </div>
    );

};


export default Hello;