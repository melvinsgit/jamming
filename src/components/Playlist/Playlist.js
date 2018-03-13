import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {

    // TODO: Handle blank name
    return (
      <div className="Playlist">
        <input
          onChange={this.handleNameChange}
          defaultValue={this.props.defaultValue}
          onFocus ={e => e.target.value = ""} />
        <TrackList
          tracks={this.props.playlistTracks}
          isRemoval={true} onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
