import React, { useEffect, useState } from 'react';
import styles from '../../styles/Search.module.css';



const Searchbar = ({searchStringValue, setSearchString}) => {

    return(
        <form className="search" >
            <input name="query" className={styles.searchBar} placeholder="Search" type="search" value={searchStringValue} onChange={(event)=>setSearchString(event.target.value)} />
        </form>
    )



}

export default Searchbar;

    