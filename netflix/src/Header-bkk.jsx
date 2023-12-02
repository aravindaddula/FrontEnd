// import './styles.css'

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  /*
  useEffect(() => {
    if (isLoggedIn) {
      // Perform actions after login like you can fetch user's
       specification content(Ex:Making API Calls) and make the changes to DOM using useState
      console.log('User is logged in');
    } else {
      // Perform actions after logout
      console.log('User is logged out');
    }
  }, [isLoggedIn]);
*/
    // Simulate a login action
  const handleLogin = () => {
    if (username === 'admin' && password === '12345') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Perform logout actions
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-form">
        {isLoggedIn ? (
            
        <div className='header'>
            <div className='white'>
                Empty Box
            </div>
            {/* // If logged in, show logout button */}
            <div>
                <button>Home</button>
                <button>Horror</button>
                <button>Comedy</button>
                <button>Rimance</button>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
      ) : (
        // If not logged in, show login form
        <div className='before-loggedin'>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}