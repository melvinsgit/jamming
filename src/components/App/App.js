import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
