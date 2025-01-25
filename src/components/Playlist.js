import React from 'react';
import Track from './Track';
import styles from './css/Playlist.module.css'

const Playlist = (props) => {
    const tracks = [];
    props.tracks.forEach(track => {
        tracks.push(<Track removeFromPlaylist={props.removeFromPlaylist} id={track.id} songName={track.name} artist={track.artists[0].name} album={track.album.name} albumCover={track.album.images[2].url}/>)
    });

    return (
        <div className={styles.container}>
            <input className={styles.input} placeholder="Enter Playlist Name"/>
            {tracks}
            <button className={styles.submit}>Save To Spotify</button>
        </div>
    )
}

export default Playlist;