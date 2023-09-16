import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div class="container">
            <h2>Home Page</h2>
            <Link to="/profile" className="btn btn-default border bg-light rounded-0 text-decoration-none"> 
                Manage Profile
            </Link>
            <br/> <Link to="/fuelquote" className="btn btn-default border bg-light rounded-0 text-decoration-none">
                Fuel Quote Form
            </Link>
            <br/> <Link to="/fuelquotehistory" className="btn btn-default border bg-light rounded-0 text-decoration-none">
                Fuel Quote History
            </Link>
        </div>
    )
}

export default Home;