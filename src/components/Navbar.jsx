import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}> 
             <Link to='/createjob'>AddingApp</Link>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}
