import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar.js';
import Main from '../components/Mainbody/Mainbody.js';
import classes from './App.css';

class App extends Component {
  state = {
    songs: [
      {title: 'Here Comes the Sun', genre: 'rock', artist: 'The Beatles', link: 'https://www.youtube.com/watch?v=xUNqsfFUwhY'},
      {title: 'My Backpages', genre: 'folk', artist: 'Bob Dylan', link: 'https://www.youtube.com/watch?v=WtDbbO2OLHY'},
      {title: 'Tears in Heaven', genre: 'rock', artist: 'Eric Clapton', link: 'https://www.youtube.com/watch?v=aRjxNj-NchU'},
      {title: 'Dear Prudence', genre: 'rock', artist: 'The Beatles', link: 'https://www.youtube.com/watch?v=wQA59IkCF5I'},
      {title: 'Stairway to Heaven', genre: 'rock', artist: 'Led Zeppelin', link: 'https://www.youtube.com/watch?v=6_AeMmTE2pc'},
      {title: 'God Only Knows', genre: 'rock', artist: 'The Beach Boys', link: 'https://www.youtube.com/watch?v=EkPy18xW1j8'},
      {title: 'I Dreamed I saw St. Augustine', genre: 'folk', artist: 'Bob Dylan', link: 'https://www.youtube.com/watch?v=9shcE0VYeN4'},
      {title: 'Diamonds and Rust', genre: 'folk', artist: 'Joan Baez', link: 'https://www.youtube.com/watch?v=1ST9TZBb9v8'},
      {title: 'Let It Be', genre: 'rock', artist: 'The Beatles', link: 'https://www.youtube.com/watch?v=QDYfEBY9NM4'},
      {title: 'All Along the Watchtower', genre: 'Rock', artist: 'Jimi Hendrix', link: 'https://www.youtube.com/watch?v=TLV4_xaYynY'},
      {title: 'May This Be Love', genre: 'rock', artist: 'Jimi Hendrix', link: 'https://www.youtube.com/watch?v=CfFlO6lHZ2g'},
      {title: 'You Are My Sunshine', genre: 'country', artist: 'Johnny Cash', link: 'https://www.youtube.com/watch?v=cGa3zFRqDn4'}
    ]
  }

  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Main 
          allSongs={this.state.songs}/>
        
      </div>
    );
  }
}

export default App;
