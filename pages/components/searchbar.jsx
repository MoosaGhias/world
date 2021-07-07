import React, { useEffect, useState } from 'react';
import styles from '../../styles/Search.module.css';



const Searchbar = ({searchString, setSearchString}) => {

    return(
        <form className="search" >
            <input name="query" className={styles.searchBar} placeholder="Search" type="search" value={searchString} onChange={(event)=>setSearchString(event.target.value)} />
        </form>
    )



}

export default Searchbar;

    