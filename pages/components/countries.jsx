import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Countries.module.css';

const Countries = () => {
    // const countryData = fetch('https://api.first.org/data/v1/countries').then(response => response.json())

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/').then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then(dataReceived => {
            const countriesData = dataReceived
            const countryKeys = Object.keys(dataReceived)
            //name:, toplevel:, alphacode:
            const countryNames = countryKeys.map(key => countriesData[key].name)
            setData(countryNames);

        });
    }, []);

    return (
        <div>
            <div className = {styles.header}>
                <Link href='/'>
                    <img className={styles.homeEarth} src = '/world.jpeg' alt = 'You got this' ></img>
                    
                </Link>
            </div>
            
            <div className={styles.mainback}>
                <h1 className={styles.hOne}>Countries of the World</h1>
                <div>
                    {data.map(name => {
                        return <ul className={styles.list} key={name}> {name}</ul>
                    })}
                </div>
            </div>
            

        </div>

    )
    
}
export default Countries