import React, { useState } from 'react';
import './App.css';
import UserTable from './gqlFunction/UserTable';
import { createNewUser, getUserByEmail, deleteUserByMail, deleteUserBySupMail } from './gqlFunction/UserTable';

function App() {
  const createUserData = {
    email: "xyz@gmail.com",
    name: "Namrata",
    isAdmin: false,
    phone: "8888888888",
    superwiserEmail: "gourab121@gmail.com",
    isApproved: true,
    isEmailApproved: true,
    isPhoneVerified: true,
    isGooleSignIn: true,
    isFacebookSignIn: false,
    isGeneralAuthSignIn: false
  };
  const getDataViaMail = {
    email: "abcd@gmail.com"
  }
  const getDataViaSuper = {
    superwiserEmail: "gourab@gmail.com"
  }
  const deleteEmail = {
    email: "namrata@gmail.com"
  }
  const deleteSuperMail = {
    superwiserEmail: "gourab@gmail.com"
  }
  
  return (
    <div className="App">
      <button onClick={() => createNewUser(createUserData)}>Create new user</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaMail.email)}>Get user by email</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaSuper.superwiserEmail)}>Get user by supermail</button><br/><br/>
      <button onClick={() => deleteUserByMail(deleteEmail)}>Delete by email</button><br/><br/>
      <button onClick={() => deleteUserBySupMail(deleteSuperMail.superwiserEmail)}>Delete by supermail</button><br/><br/>
    </div>
  );
}

export default App;


//  const[mail, setMail] = useState(null)
//  const callingFunction = userByEmail(mail)