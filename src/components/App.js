import React, { Component } from 'react';

import '../styles/App.css';
import NavBar from '../components/NavBar';
import PlayList from '../components/PlayList';
import PlayListForm from '../components/PlayListForm';
import PlayListItem from '../components/PlayListItem';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <NavBar/>
            <div className="row">
              <div className="col-8">
                <PlayListForm/>
              </div>
              <div className="col-4">
                <PlayList/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
