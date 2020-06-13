import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}
//don't need state so null ok
export default connect(null, { getCurrentUser }) (App);
