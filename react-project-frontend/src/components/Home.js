import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h3>Welcome to MyTown Bank!</h3>
        <h4>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h4>
    </div>
)

export default Home;