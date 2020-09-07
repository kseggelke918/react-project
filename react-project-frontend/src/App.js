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
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import AccountCard from './components/AccountCard.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, myAccounts } = this.props
    console.log("app is being rendered")
    console.log("these are props in app", this.props)
    return (
      <Router>
        <div className="App"> 
        <Header />
          { loggedIn ? <NavBar /> : <Home />}
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path= '/accounts' component={MyAccounts}/>  
            <Route exact path='/accounts/new' component={NewAccountForm} />
            // Account card needs props to render 
            <Route exact path='/accounts/:id' render={props => {
              const account = myAccounts.find(account => account.id === props.match.params.id)
              return <AccountCard account={account} {...props} />
            }
          } />
          </Switch>
          <Footer />
        </div>  
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser, 
    myAccounts: state.myAccounts
  })
}



export default connect(mapStateToProps, { getCurrentUser }) (App);
