import React, { useState } from 'react'
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries';

export async function createNewUser(userDetails){
    try {
        const createUserData = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
        console.log("Response is ", createUserData.data.createUser);
    } catch (error) {
        console.log("error is ", error);
    }
}
// export default function UserTable{

//      const [mail, setMail] = useState(null)
//     // const [name, setName] = useState(null)
//      const [superviserMail, setSuperviserMail] = useState(null)
//     // const [admin, setAdmin] = useState(false)
//     const [deletionMail,setDeletionMail]=useState(null);
//     const [updatedName,setUpdateName]=useState();

//     // const userDetails = {
//     //     email: "namrata21@gmail.com",
//     //     name: "Namrata",
//     //     isAdmin: false,
//     //     phone: "8888888888",
//     //     superwiserEmail: "gourab111@gmail.com",
//     //     isApproved: true,
//     //     isEmailApproved: true,
//     //     isPhoneVerified: true,
//     //     isGooleSignIn: true,
//     //     isFacebookSignIn: false,
//     //     isGeneralAuthSignIn: false
//     // };
//     // email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn
//     const updatedData={
//         email: "namratasharma@gmail.com",
//         name: updatedName,
//         isAdmin: false,
//         phone: "8888888888",
//         superwiserEmail: "gourab@gmail.com",
//         isApproved: true,
//         isEmailApproved: true,
//         isPhoneVerified: true,
//         isGooleSignIn: true,
//         isFacebookSignIn: false,
//         isGeneralAuthSignIn: false
//     }

//     async function createNewUser(userDetails){
//         try {
//             const createUserData = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
//             console.log("Response is ", createUserData.data.createUser);
//         } catch (error) {
//             console.log("error is ", error);
//         }
//     }
    
//     const getUserByEmail = async () => {
//         try {
//             const userDetails = await API.graphql({ query: queries.getUser, variables: { email: 'namrata@gmail.com'} });
//             console.log("User details are", userDetails.data.getUser)
//         }
//         catch {
//             console.log("Error in getUser");
//         }
//     }
//     const getUserBySupMail = async () => {
//         try {
//             const userDetails = await API.graphql({ query: queries.getUser, variables: {superviserEmail: 'gourab@gmail.com' } });
//             console.log("User details are", userDetails)
//         }
//         catch (error){
//             console.log("Error in getUser", error);
//         }
//     }
//      const deleteByEmail = {
//          email: deletionMail
//      }
//      const deleteTheUser = async () => {
//         try {
//             const deletedUser = await API.graphql({ query: mutations.deleteUser, variables: { input: deleteByEmail} });
//             console.log("Deleted User is ", deletedUser.data.deleteUser);
//         } catch (error) {
//             console.log("Error in deleting ", error);
//         }
//     }
   
//     const updateUser=async()=>{
//         try {
//             const updatedUser=await API.graphql({query:mutations.updateUser,variables:{input:updatedData}});
//             console.log("Update user is ",updatedUser.data.updateUser);
//         } catch (error) {
//             console.log("Error is ",error);
//         }
//     }


//     return (
//         <div>
//             <button onClick={() => createNewUser()}>Create New Row</button><br/><br/>
//             <input type='text' placeholder='Enter Email for getUser by email' onChange={(supermail)=>setMail(supermail.target.value)}/>
//             <button onClick={() => getUserByEmail()}>Get Data by Email</button><br/><br/> 
//             <input type='text' placeholder='Enter Email for getUser by supervisor email' onChange={(supermail)=>setMail(supermail.target.value)} />
//             <button onClick={() => getUserBySupMail()}>Get Data by Supervisor Email</button><br/><br/>
//             <input type='text' placeholder='Enter Email for deleting the user' onChange={(deletionMail)=>setDeletionMail(deletionMail.target.value)} />
//             <button onClick={()=>deleteTheUser()}>Delete user</button><br/><br/>
//             <input type='text' placeholder='Enter Email for updating the user' onChange={(mail)=>setMail(mail.target.value)} />
//             <input type='text' placeholder='Enter updated name' onChange={(updatedName)=>setUpdateName(updatedName.target.value)} />
//             <button onClick={()=>updateUser()}>Update user</button>
//         </div>
//     )
// }

