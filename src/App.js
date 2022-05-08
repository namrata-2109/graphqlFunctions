
import './App.css';
import UserTable from './gqlFunction/UserTable';
import {createNewUser} from './gqlFunction/UserTable';

function App() {
  const userDetails = {
        email: "namrata21@gmail.com",
        name: "Namrata",
        isAdmin: false,
        phone: "8888888888",
        superwiserEmail: "gourab111@gmail.com",
        isApproved: true,
        isEmailApproved: true,
        isPhoneVerified: true,
        isGooleSignIn: true,
        isFacebookSignIn: false,
        isGeneralAuthSignIn: false
    };
    // email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn
  //   const updatedData={
  //     email: "namratasharma@gmail.com",
  //     name: updatedName,
  //     isAdmin: false,
  //     phone: "8888888888",
  //     superwiserEmail: "gourab@gmail.com",
  //     isApproved: true,
  //     isEmailApproved: true,
  //     isPhoneVerified: true,
  //     isGooleSignIn: true,
  //     isFacebookSignIn: false,
  //     isGeneralAuthSignIn: false
  // }

  return (
    <div className="App">
      <button onClick={() => createNewUser(userDetails)}>Create user</button>
    </div>
  );
}

export default App;
