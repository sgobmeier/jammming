import React, { useState } from 'react';
import Track from './Track';

const Tracklist = (props) => {

    const tracks = [];
    props.tracks.forEach(track => {
        tracks.push(<Track songName={track.name} artist={track.artists[0].name} album={track.album.name} albumCover={track.album.images[2].url}/>)
    });
    
    return (
        <>{tracks}</>
    )

}

export default Tracklist;

/*const returnRandomTrack = (response) => {
    const index = Math.floor(Math.random() * response.tracks.items.length);
    const item = response.tracks.items[index];
    console.log(item);
    return {
      songName: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      albumCover: item.album.images[2].url
    }
  }*/
