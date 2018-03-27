import React, { Component } from 'react';
import Sound from 'react-sound';
import './TrackPreview.css';

class TrackPreview extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a className="Track-action" href={this.props.href}><img src="../play.png" alt="Track Preview" /></a>
    );
  }
}

export default TrackPreview;
