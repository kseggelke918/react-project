import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyAccounts from './components/MyAccounts'
import MainContainer from './components/MainContainer.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Router>
        <div className="App"> 
          <NavBar />
          <MainContainer />
          <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path= 'my-accounts' component={MyAccounts}/>  
          <Footer />
        </div>  
      </Router>
    )
  }
}





export default connect(null, { getCurrentUser }) (App);
