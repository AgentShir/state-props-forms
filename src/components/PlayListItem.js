import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor(props){
      super(props)
  }

  render(){
      return (
          <div>
            <ul>
              <li>{this.props.song1.userName}</li>
              <li>{this.props.song1.songArtist}</li>
              <li>{this.props.song1.songTitle}</li>
              <li>{this.props.song1.songNotes}</li>
            </ul>
          </div>
        )
  }
}

export default PlayListItem;
