import React, { useState } from 'react';
import styles from './css/SearchBar.module.css'

const SearchBar = (props) => {

    const [input, setInput] = useState("")

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        props.searchSpotifyTrack(input);
    }

    return (
        <form className={styles.Container} onSubmit={onClickHandler}>
            <input className={styles.SearchBar} type="text" value={input} onChange={onChangeHandler}></input>
            <button className={styles.Button} onClick={onClickHandler}>Search</button>
        </form>
    )
}

export default SearchBar;