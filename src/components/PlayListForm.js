import React, { Component } from 'react';

class PlayListForm extends Component {
  render() {
    return(
      <div className="container">
        <div className="App">
          <div className="wrapper" style={{width: '80rem'}}>
              <div className="jumbotron">
                <div className="form">
                    <form onSubmit={this.handleFormSubmit}>
                      <div>User Name:</div>
                      <input type="text" placeholder="Name or User Name" onChange={this.handleNameChange} name="userName" id="userName"/><br />
                      <div>Artist/Band:</div>
                      <input type="text" placeholder="Artist or Band Name" onChange={this.handleNameChange} name="songArtist" id="songArtist"/><br />
                      <div>Song Title:</div>
                      <input type="text" placeholder="Song Title" onChange={this.handleNameChange} name="songTitle" id="songTitle"/><br />
                      <div>Notes about Song:</div>
                      <input type="text" onChange={this.handleNameChange} name="songNotes" id="songNotes"/><br />
                      <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
              </div>
          </div>
        </div>
      </div>

    )
  }
}


// Add in addToList from tinylasagna.js
// addToList = (e) => {
//     e.preventDefault();
//     this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
//     let listItem = JSON.stringify(this.state);
//
//     fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
//       method: "POST",
//       body: listItem,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
//   }
//   ).then(response => {
//     console.log(response, "yay");
//
//   }).catch(err => {
//     console.log(err, "boo!");
//   });
//   this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
// }

export default PlayListForm;
