import React from 'react';
import styles from './css/Track.module.css';

const image = {
    margin: "0.5rem"
}

const Track = (props) => {

    return (
        <div className={styles.container}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img style={image} src={props.albumCover}/>
                <div>
                    <p className={styles.paragraph}>{props.songName}</p>
                    <p className={styles.paragraph}>{props.artist} | {props.album}</p>
                </div>
            </div>
            <button className={styles.button}>+</button>
        </div>
    );
};

export default Track;