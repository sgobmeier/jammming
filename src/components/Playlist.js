import React, { useState } from 'react';
import Track from './Track';
import styles from './css/Playlist.module.css'

const Playlist = (props) => {

    const [input, setInput] = useState("");

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const tracks = [];
    props.tracks.forEach(track => {
        tracks.push(<Track removeFromPlaylist={props.removeFromPlaylist} uri={track.uri} key={track.uri} songName={track.name} artist={track.artists[0].name} album={track.album.name} albumCover={track.album.images[2].url}/>)
    });

    const onClickHandler = () => {
        props.submitPlaylist(input);
        setInput("");
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} value={input} onChange={onChangeHandler} placeholder="Enter Playlist Name"/>
            {tracks}
            <button className={styles.submit} onClick={onClickHandler}>Save To Spotify</button>
        </div>
    )
}

export default Playlist;