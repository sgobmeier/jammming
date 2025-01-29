import React from 'react';
import styles from './css/Track.module.css';

const image = {
    margin: "0.5rem"
}

const Track = (props) => {

    const onClickHandler = () => {
        if (props.addToPlaylist) {
            props.addToPlaylist(props.uri);
        }
        if (props.removeFromPlaylist) {
            props.removeFromPlaylist(props.uri);
        }
    }

    const addButton = (<svg onClick={onClickHandler} className={styles.svg} viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>);
    const removeButton = (<svg onClick={onClickHandler} className={styles.svg} viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12 6V18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>);

    return (
        <div className={styles.container}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img style={image} src={props.albumCover}/>
                <div>
                    <p className={styles.paragraph}>{props.songName}</p>
                    <p className={styles.paragraph}>{props.artist} | {props.album}</p>
                </div>
            </div>
            {props.addToPlaylist ? addButton : removeButton}
        </div>
    );
};

export default Track;