import { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import NewsDashBoard from './NewsDashBoard';
// import {newsByCategory} from './NewsService'
import './styles.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  
  function handleLogin(fromLoginForm){
    // console.log(fromLoginForm);
    setLoggedIn(fromLoginForm)
  }

  function handleLogout(childData){
    setLoggedIn(childData)
  }
  return (
    <div>
       <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
       <div className='articles'>
       {isLoggedIn ? <NewsDashBoard/> : <LoginForm handleLogin={handleLogin}/> }
       </div>
    </div>
  );
}

export default App;
