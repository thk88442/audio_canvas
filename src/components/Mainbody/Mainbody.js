import React from 'react';
import classes from './Mainbody.css';
import Musicplayer from '../Musicplayers/Musicplayers.js';

const main = (props) => {
    return (
        <div className={classes.main}>
        <div className={classes.musicPlayerContainer}>
            {props.allSongs.map((song, index) => {
                return (
                    
                    <Musicplayer 
                        title={song.title}
                        genre={song.genre}
                        artist={song.artist}
                        link={song.link}/>
                    
                );
            })}
        </div>
        </div>
    );
};


export default main;