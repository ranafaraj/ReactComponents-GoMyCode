import React from 'react'
import './App.css';
import  FullName  from './Component/Profile/FullName'
import  Address  from './Component/Profile/Address'
import  ProfilePhoto  from './Component/Profile/ProfilePhoto'



const App = () => {
 return (
  
     <div className="App">
      <header className="App-header">
        <div className='profile-photo'>
          <ProfilePhoto />
        </div>
        <div className='name-address'>
          <FullName />
          <Address />
        </div>

      </header>
    </div>
   
 );
};
export default App;
