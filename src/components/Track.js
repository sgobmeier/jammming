import React from 'react';

const container = {
    padding: "0px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "1rem",
    border: "red 1px solid"
}

const Track = (props) => {

    return (
        <div style={container}>
            <img src={props.albumCover}/>
            <div>
                <h4>{props.songName}</h4>
                <p>{props.artist} | {props.album}</p>
            </div>
        </div>
    );
};

export default Track;