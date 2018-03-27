import React, { Component } from 'react';
import Sound from 'react-sound';
import './Track.css';

import TrackPreview from '../TrackPreview/TrackPreview';

class Track extends Component {

  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
    return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  renderPreview() {
    if (this.props.displayPreview) {
      return <TrackPreview href={this.props.track.preview_url} />
    }
  }

  render() {
    return(
      <div className="Track">
        {this.renderPreview()}
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
