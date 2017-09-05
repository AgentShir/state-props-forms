import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(props){
    super(props)
      this.state = {
        userName: '',
        songArtist: '',
        songTitle: '',
        songNotes:''
      }
  }

  handleuserNameChange = (event) => (
    this.setState({userName: event.target.value})
  )
  handlesongArtistChange = (event) => (
    this.setState({songArtist: event.target.value})
  )
  handlesongTitleChange = (event) => (
    this.setState({songTitle: event.target.value})
  )
  handlesongNotesChange = (event) => (
    this.setState({songNotes: event.target.value})
  )

  // Add in addToList from tinylasagna.js
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songArtist: '', songTitle: '', songNotes:''});


  render() {
    return(
      <div className="container">
        <div className="App">
          <div className="wrapper" style={{width: '80rem'}}>
              <div className="form">
                <div className="form-group">
                    <form method="POST" onSubmit={this.handleFormSubmit}>
                      <div className="form-group row">
                        <label for="userName" className="col-2 col-form-label">User Name:</label>
                        <input className="form-control" type="text" placeholder="Name or User Name" onChange={this.handleNameChange} name="userName" id="userName"/>
                      </div>

                      <div className="form-group-row">
                        <label for="songArtist" className="col-2 col-form-label">Artist/Band:</label>
                        <input className="form-control" type="text" placeholder="Artist or Band Name" onChange={this.handleNameChange} name="songArtist" id="songArtist"/>
                      </div>

                      <div className="form-group-row">
                        <label for="songTitle" className="col-2 col-form-label">Song Title:</label>
                      <input className="form-control" type="text" placeholder="Song Title" onChange={this.handleNameChange} name="songTitle" id="songTitle"/>
                      </div>

                      <div className="form-group">
                        <label for="songNotestextArea" className="col-2 col-form-label">Notes about Song:</label>
                      <input type="text" onChange={this.handleNameChange} name="songNotes" id="songNotes"/>
                      </div>
                      <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default PlayListForm;
