import React, { Component } from 'react';
import './Track.css';

class Track extends React.Component {

  render() {
    return(
      <div class="Track">
        <div class="Track-information">
          <h3>Tiny Dancer</h3>
          <p>The White Raven | Tiny Dancer</p>
        </div>
        <a class="Track-action">+</a>
      </div>
    );
  }
}

export default Track;
