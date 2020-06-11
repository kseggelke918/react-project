import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/user/accounts')
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default App;
