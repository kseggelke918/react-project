import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myAccounts from './reducers/myAccounts.js'
import signupForm from './reducers/signupForm.js'
import newTripForm from './reducers/newTripForm.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: usersReducer, 
    currentUser: currentUser, 
    loginForm,
    myAccounts,
    signupForm, 
    newTripForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  

  export default store