// default load script to run React
import React from 'react';
// import ReactDOM from "react-dom";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import "./fonts/GothamLight.ttf"
import "./fonts/GothamMedium.ttf"


function App() {
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  /*global google oauth api call*/
  useEffect(() => {
      google.accounts.id.initialize({
        client_id: "797526822732-jo172j2vj3aeldd7g9pncdchqdqbn6kt.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
      );

        

    }, []);
// If we have no user - sign in button
// if we dont have a user - show logout button

  return (
    <div className="App" style={{display: 'flex',  justifyContent:'right', alignItems:'flex-start', height: '100vh'}}>
      {  <Login/> }
      { <Home/> }
      <div id="signInDiv"> </div>
      { user &&
        <div> 
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
        </div>
      }
      { Object.keys(user).length !== 0 &&
        <button className="googleSignOutButton" onClick={ (e) => handleSignOut(e)}> Sign Out</button>
      }
    </div>
  );
}


export default App;

//<div id="signInDiv"> is the googleAuthLogin api/loginAuth being added to the websites Login.jsx page - this needs
// to be refactored into the individual page? or is it ok in the App.js?