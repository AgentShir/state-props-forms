import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <ul>
          <li>{this.props.songs.userName}</li>
          <li>{this.props.songs.songArtist}</li>
          <li>{this.props.songs.songTitle}</li>
          <li>{this.props.songs.songNotes}</li>
        </ul>
      </div>
    )
  }
}

export default PlayListItem;
