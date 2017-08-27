<div className="container">
        {this.state.vehicles.map(item => (
          <div className="card" style={{width:'20rem'}}>
            <div className="card-block">

            <div className="wrapper" key={item.name}>
                <div>User:{item.userName}</div>
                <div>Artist/Band:{item.songArtist}</div>
                <div>Title:{item.songTitle}</div>
                <div>Notes:{item.songNotes}</div>
            </div>
            </div>
          </div>
      ))}
</div>


export default PlayListItem;
