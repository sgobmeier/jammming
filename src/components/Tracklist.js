import React, { useState } from 'react';
import Track from './Track';
import styles from './css/Tracklist.module.css'

const Tracklist = (props) => {

    const tracks = [];
    props.tracks.forEach(track => {
        tracks.push(<Track addToPlaylist={props.addToPlaylist} uri={track.uri} key={track.uri} songName={track.name} artist={track.artists[0].name} album={track.album.name} albumCover={track.album.images[2].url}/>)
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Results</h2>
            {tracks}
        </div>
    )
}

export default Tracklist;
