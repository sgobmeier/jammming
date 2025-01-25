import React from 'react';
import styles from './css/Track.module.css';

const image = {
    margin: "0.5rem"
}

const Track = (props) => {

    const onClickHandler = () => {
        if (props.addToPlaylist) {
            props.addToPlaylist(props.id);
        }
        if (props.removeFromPlaylist) {
            props.removeFromPlaylist(props.id);
        }
    }

    const addButton = (<svg onClick={onClickHandler} className={styles.svg} viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>);
    const removeButton = (<svg onClick={onClickHandler} className={styles.svg} viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>);

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