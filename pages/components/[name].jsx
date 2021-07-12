import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';
import styles from '../../styles/Name.module.css';
import Header from './header';



const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context){
    
    const { name } = context.query
    //console.log(name)
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    const data = await res.json()
    return {
        props: {
            country: data
        }
    }
}


const Info = ({ country }) => {
    // console.log(country[0].name)
    return (
        
        <div>
            <Header />
            <h1 className={styles.name}>Country Name</h1>
            <h2 key={country[0].name} className={styles.name}>{country[0].name}</h2>
        </div>
    )
}

export default Info;