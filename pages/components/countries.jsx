import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Countries.module.css';
import Searchbar from './/searchbar';
import Header from './/header';

const Countries = () => {
    // const countryData = fetch('https://api.first.org/data/v1/countries').then(response => response.json())

    const [data, setData] = useState([]);
    const [searchString, setSearchString] = useState('');


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
        <div className={styles.mainback}>
            <Header />
            
            <div>
                <h1 className={styles.hOne}>Countries of the World</h1>
                <Searchbar searchStringValue={searchString} setSearchString={setSearchString}/>
                <div>
                    {data.filter((countryName)=>{
                        return countryName.toLowerCase().indexOf(searchString.toLowerCase()) >= 0
                    }).map(name => {
                        return <Link href={`/components/` + name} key={name}><ul className={styles.list}>{name}</ul></Link>
                    })}
                </div>
            </div>


        </div>

    )
    
}
export default Countries