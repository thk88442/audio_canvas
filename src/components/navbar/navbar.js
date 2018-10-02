import React from 'react';
import classes from './navbar.css';

const navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar1}>
                <div className={classes.contents}>
                    <h1 className={classes.navbar_title}>Audio Canvas</h1>
                    <input type='text' placeholder='Search'/>
                </div>
            </div>

            <div className={classes.navbar2_hidden}>
                <div className={classes.navbar2}>
                    <div id={classes.rock}><a href="">Rock</a></div>
                    <div id={classes.hip_hop}><a href="">Hip Hop</a></div>
                    <div id={classes.jazz}><a href="">Jazz</a></div>
                    <div id={classes.folk}><a href="">Folk</a></div>
                    <div id={classes.country}><a href="">Country</a></div>
                    <div id={classes.soundtracks}><a href="">Soundtracks</a></div>
                </div>
            </div>
        </div>
    );
};

export default navbar;