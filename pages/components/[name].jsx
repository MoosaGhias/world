import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';


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
            <h1>Country Name</h1>
            <h1 key={country[0].name}>{country[0].name}</h1>
        </div>
    )
}

export default Info;