import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends React.Component {


  render() {
    return (
      <div className="Playlist">
      <input placeholder="New Playlist" onChange={this.handleTermChange}/>
        <div className="Playlist-save">SAVE TO SPOTIFY</div>
      </div>
    );
  }
}

export default Playlist;
