import React from 'react'
import Login from './Login.js'
import Signup from './Signup.js'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h3>Welcome to MyTown Bank! Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h3>
    </div>
)

export default Home;