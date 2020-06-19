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
// import MainContainer from './components/MainContainer.js'
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
    return (
      <Router>
        <div className="App"> 
        <Header />
          { loggedIn ? <NavBar /> : <Home />}
          {/* The <Switch /> component will only render the first route that matches/includes the path. 
          Once it finds the first route that matches the path, it will not look for any other matches.  Also 
          allows for nested routes to work properly, which is something that <Router /> will not be able to handle */}
          <Switch>
            <Route exact path='/' render={() => loggedIn ? <MyAccounts /> : <Home />} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path= 'my-accounts' component={MyAccounts}/>  
            <Route exact path='/accounts/new' component={NewAccountForm} />
            // Account card needs props to render 
            <Route exact path='/accounts/:id' render={props => {
              console.log("this is myAccounts", myAccounts)
              const account = myAccounts.find(account => account.id === props.match.params.id)
              console.log("this is account in route", account)
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
  console.log("this is state", state)
  return ({
    loggedIn: !!state.currentUser, 
    myAccounts: state.myAccounts
  })
}



export default connect(mapStateToProps, { getCurrentUser }) (App);
