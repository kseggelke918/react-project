import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import MyAccounts from './components/MyAccounts.js'
import NewAccountForm from './components/NewAccountForm.js'
import MainContainer from './components/MainContainer.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <div className="App"> 
          <NavBar />
          <Route exact path='/' render={() => loggedIn ? <MyAccounts /> : <Home />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path= 'my-accounts' component={MyAccounts}/>  
          <Route exact path='/accounts/new' component={NewAccountForm} />
          <Footer />
        </div>  
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}



export default connect(mapStateToProps, { getCurrentUser }) (App);
