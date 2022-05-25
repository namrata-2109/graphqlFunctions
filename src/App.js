import React, { useState } from 'react';
import { API } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

import './App.css';
import UserTable from './gqlFunction/UserTable';
import { createNewUser, getUserByEmail,getUserBySupMail, deleteUserByMail, deleteUserBySupMail, updateUserInfo } from './gqlFunction/UserTable';
import { createNewNotif,updateNotif,deleteNotifByMail, listNotifications } from './gqlFunction/NotifTable';
import { validateEmail,validatePhone} from './InputTest';
import { createTask, deleteTask, updateTask, getTaskbyId } from './gqlFunction/OrderTaskTable';
import { createOrders, deleteOrders, updateOrders, getOrderbyIds } from './gqlFunction/OrderTable';
import { addWorkFlow, deletWorkFlow, updateWorkflow, listWorkLFlow } from './gqlFunction/Workflow';
import {addWorkFlowDefinition ,updatedefiniton ,deleteDefinition , listDefintions } from './gqlFunction/WorkflowDefinition';
import {createNotifData,updateNotifData,deleteNotif} from './gqlFunctionTest/NotifTableTest';
import {createOrderData,updateOrderData,deleteOrderData,getOrderviaID} from './gqlFunctionTest/OrderTableTest';


function App() {
  
  /*const createNotifData = {
    userNotificationsId:"xyz@gmail.com",
    NotificationStatus:'abc',
    NotificationContent:'hdzhzd',
    NotifyTime:'String'
  };

  const updateNotifData={
    NotificationStatus:'avail',
    id:"b9998afd-1850-4101-83c3-1ecb251f2330",
   
    _version:"1"
  }

  const deleteNotif={
    id:"3e2f5dbe-8f8d-4cb7-86b9-67356fed7da3",
    _version: "1"
  }*/
  const createUserData = {
    email: "xyzyzzz@gmail.com",
    name: "Nifaz",
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
    email: "abcd"
  }
  const getDataViaSuper = {
    superwiserEmail: "gourab@gmail.com"
  }
  const deleteEmail = {
    email: "niaz@gmail.com",
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
    isAdmin: true,
    _version: "9"
  }

  const testEmail = {
    email: "gshlga@gmail.com"
  }

  const createTaskData = {
    TaskID: 'abghcd',
    taskStatus: 'TASK_FORWARD',
    NodeID: 'sjrjsj',
    NextNodeName: [""],
    TaskAssignedTo: 'fgrag',
    isFirstUser: "true",
    TaskDescription: 'adfadf',
    UserFilePathList: ['asfgghj'],
    AssignedTimeStamp: 'String',
    TaskCompletionTime: 'String',
    DueDate: '1969-01-01Z'
  }

  const updateTaskData = {
    TaskID: 'asdfg',
    NextNodeName: ['asdf'],
    UserFilePathList: ['aghj'],
    TaskAssignedTo: 'lnvsln',
    _version: "1"


  }

  const deleteTaskData = {
    TaskID: 'asdfg',
    _version: "3"


  }

  const getTaskviaID = {
    TaskID: 'neiloo'
  }

  /*const createOrderData = {
  orderID: 'sjfGSzhaab',
  description: 'is fine',
  currentStatus: 'ORDER_CREATED',
  currentData: 'String!',
  currentTime: 'String!',
  createdDate: 'String!',
  WorkFlowJSON:"{\"hello\":20}",
  }

  const updateOrderData = {
    orderID: 'sjfaab',
    description: 'is not fine',
    _version: "1"


  }

  const deleteOrderData = {
    orderID: 'sjfaab',
    _version: "1"


  }

  const getOrderviaID = {
    orderID: 'sjfaab',
  }*/
  const workflowDetails={
    workflowName: "projectsss",
    WorkFlowJSON: "{\"a\":1, \"b\":3, \"string\": 234}",
    WorkFlowDescription: "new project", 
    SaveAsDraft: false,
    CreatedBy: "nam",
    OwnedBy: "nam"
  }
  const workflowdefinition={
    workflowdefinitionid: "first definition",
    NodeName: "Task 1",
    NextNodeName: "[Task 2,Task 3]",
    Description: "Hello new definition",
    isRootNode: true,
    WorkFlowName: "project2",
    id: "4ww4-45qw-qw1w-45wq",
    workflowWorkflowdefinitionsId: "project"
  }
  const deleteWfData = {
    workflowName: "project",
    _version: "2"
  }
  const updateWorkflowDetails={
    workflowName: "project",
    SaveAsDraft: true,
  }
  const updateWorkflowDefinition={
    id: "4ww4-45qw-qw1w-45wq",
    NodeName: "Task 2",
  }
  const deleteDefData = {
    id: "2bcf3ce4-4d02-45e1-94c2-f14ca7600634",
    _version: "1"
  }

  return (
    <div className="App">
      <h1>User table</h1>
      <button onClick={() => createNewUser(createUserData)}>Create new user</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaMail.email)}>Get user by email</button><br/><br/>
      <button onClick={() => getUserBySupMail(getDataViaSuper.superwiserEmail)}>Get user by supermail</button><br/><br/>
      <button onClick={() => deleteUserByMail(deleteEmail)}>Delete by email</button><br/><br/>
      <button onClick={() => deleteUserBySupMail(deleteSuperMail.superwiserEmail)}>Delete by supermail</button><br/><br/>
      <button onClick={() => updateUserInfo(updateTheUser)}>Update User</button><br/><br/>

      <h1> Notif table</h1>
      <button onClick={() => createNewNotif(createNotifData)}>Create new notif</button><br/><br/>
      <button onClick={() => updateNotif(updateNotifData)}>Update notif </button><br/><br/>
      <button onClick={() => deleteNotifByMail(deleteNotif)}>Delete notif </button><br/><br/>
      <button onClick={() => listNotifications()}>List notifications </button><br/><br/>

      <h1>validity checks</h1>
      <button onClick={() => validateEmail(testEmail.email)}>test mail </button><br/><br/>
      <button onClick={() => validatePhone(createUserData.phone)}>test number </button><br/><br/>

      <h1>order task</h1>
      <button onClick={() => createTask(createTaskData)}>Create new Task</button><br/><br/>
      <button onClick={() => updateTask(updateTaskData)}>update new Task</button><br/><br/>
      <button onClick={() => deleteTask(deleteTaskData)}>delete new Task</button><br/><br/>
      <button onClick={() => getTaskbyId(getTaskviaID)}>get new Task</button><br/><br/>

      <h1>order table</h1>
      <button onClick={() => createOrders(createOrderData)}>Create new order</button><br/><br/>
      <button onClick={() => updateOrders(updateOrderData)}>update new order</button><br/><br/>
      <button onClick={() => deleteOrders(deleteOrderData)}>delete new order</button><br/><br/>
      <button onClick={() => getOrderbyIds(getOrderviaID)}>get order</button><br/><br/>

      <h1>WF table</h1>
      <button onClick={()=>addWorkFlow(workflowDetails)}>Create workflow</button><br/><br/>
      <button onClick={()=>deletWorkFlow(deleteWfData)}>delete workflow</button><br/><br/>
      <button onClick={()=>updateWorkflow(updateWorkflowDetails)}>updated workflow</button><br/><br/>
      <button onClick={()=>listWorkLFlow()}>list workflow</button><br/><br/>

      <h1>WFD table</h1>
      <button onClick={()=>addWorkFlowDefinition(workflowdefinition)}>Create workflow Definition</button><br/><br/>
      <button onClick={()=>updatedefiniton(updateWorkflowDefinition)}>update workflow Definition</button><br/><br/>
      <button onClick={()=>deleteDefinition(deleteDefData)}>delete workflow Definition</button><br/><br/>
      <button onClick={()=>listDefintions()}>list workflow Definition</button><br/><br/>


    </div>
  );
}

export default App;


//  const[mail, setMail] = useState(null)
//  const callingFunction = userByEmail(mail)