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

  // as soon as the component mounts, we get the current user
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
// automatically calls dispatch for us on the return value of getCurrentUser
// dispatch updates store
// essentially calling store.dispatch({action object}) - happening automatically with connect