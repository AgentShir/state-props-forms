//Form from the Star Wars project
render() {
  return (
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

export default PlayListForm;
