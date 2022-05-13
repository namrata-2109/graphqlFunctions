import React, { useState } from 'react';
import './App.css';
import UserTable from './gqlFunction/UserTable';
import { createNewUser, getUserByEmail, deleteUserByMail, deleteUserBySupMail, updateUserInfo } from './gqlFunction/UserTable';

function App() {
  const createUserData = {
    email: "pqr@gmail.com",
    name: "pqr",
    isAdmin: false,
    phone: "8888888888",
    superwiserEmail: "gourab131@gmail.com",
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
    email: "namrata@gmail.com",
    _version: "1"
  }
  const deleteSuperMail = {
    email: "namrata@gmail.com",
    superwiserEmail: "gourab@gmail.com",
    _version: "1"
  }
  const updateTheUser = {
    email: "xyz@gmail.com",
    name: "anuj",
    isAdmin: false,
    phone: "8888888888",
    superwiserEmail: "gourab121@gmail.com",
    isApproved: true,
    isEmailApproved: true,
    isPhoneVerified: true,
    isGooleSignIn: true,
    isFacebookSignIn: false,
    isGeneralAuthSignIn: false
  }

  return (
    <div className="App">
      <button onClick={() => createNewUser(createUserData)}>Create new user</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaMail.email)}>Get user by email</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaSuper.superwiserEmail)}>Get user by supermail</button><br/><br/>
      <button onClick={() => deleteUserByMail(deleteEmail)}>Delete by email</button><br/><br/>
      <button onClick={() => deleteUserBySupMail(deleteSuperMail.superwiserEmail)}>Delete by supermail</button><br/><br/>
      <button onClick={() => updateUserInfo(updateTheUser.email)}>Update User</button><br/><br/>
    </div>
  );
}

export default App;


//  const[mail, setMail] = useState(null)
//  const callingFunction = userByEmail(mail)