// import './styles.css'

import React, { useState, useEffect } from 'react';

export default function Header({isLoggedIn,handleLogout}) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
// console.log(handleLogout);

  return (
      <nav className='header'>
          <h2>Philips Kart</h2>
          {/* <ul> */}
            <li><a href=''>Home</a></li>
            <li><a href=''>Horror</a></li>
            <li><a href=''>Comedy</a></li>
            <li><a href=''>Romance</a></li>
            {isLoggedIn ?<li onClick={()=>handleLogout(false)}>Logout</li>:""}
          {/* </ul> */}
        </nav>
  );
}