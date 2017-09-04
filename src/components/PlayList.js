import React, { Component } from 'react';
import PlayListItem from '../components/PlayListItem';
import '../styles/App.css';


class PlayList extends Component {
  constructor(props){
    super(props)
      this.state = {
        songs: []
      }
  }

// From tinylasagna.js
componentDidMount(){
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
  }).then(data => {
    this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  // From tinylasagna.js
fetchData = (e) => {
  e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
        }).then(data => {
        this.setState({songs: data});
      })
    }

render(){
  return (
    <div>
      {this.state.songs.map((item) => (
        <PlayListItem songs={item}/>
      ))}
    </div>
    )
  }
}
export default PlayList;
