import React from 'react';
import classes from './Musicplayers.css';

const musicplayer = (props) => {
   
    return (
        <div className={classes.musicplayer}>
            <div>
                <h1 className={classes.songtitle}>{props.title}</h1>
                <h2 className={classes.artist}>{props.artist}</h2>
                <p className={classes.link}>{props.link}</p>
            </div>
        </div>
    );
};

export default musicplayer;