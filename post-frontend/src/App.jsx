import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <h3>Welcome to Alex Posts</h3>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <button>
          <NavLink to="/create-posts">Create Posts</NavLink>
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

export default App