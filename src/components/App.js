import React, { Component } from 'react';

import '../styles/App.css';
import NavBar from '../components/NavBar';
import PlayListForm from '../components/PlayListForm';
import PlayList from '../components/PlayList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
