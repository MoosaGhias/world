import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Hello.module.css';
import Anime from 'react-anime';

const Hello = () => {
    return (
        <div>
            
            <h1 className= {styles.helloWorld}>Hello World</h1>

            
            <Link href='/components/countries'>
                {/* <div className={styles.enter}>Mochi</div> */}
                <img src = '/world.jpeg' alt = 'You got this' ></img>
            </Link>

        </div>
    );

};


export default Hello;