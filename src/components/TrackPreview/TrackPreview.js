import React, { Component } from 'react';
import './TrackPreview.css';

class TrackPreview extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trackUrl: '',
      audio: null,
      playing: false
    }
  }

  playPreview(previewUrl) {
    let audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        trackUrl: previewUrl,
        audio
      })
    } else {
      if (this.state.trackUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          trackUrl: previewUrl,
          audio
        })
      }
    }
  }

  render() {
    return(
      <p className="TrackPreview-action">
      <img
      onClick={() => this.playPreview(this.props.href)}
      src={require('./play.png')}
      alt="Track Preview" />
      </p>
    );
  }
}

export default TrackPreview;
