import React, { useState } from "react";
import "../Context/CSS/LoginSignup.css";
import googleicon from "../Components/assets/google.png";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider , getAuth ,signInWithPopup  } from "firebase/auth";
// import { Cone, EyeOff } from 'lucide-react';
import { Eye,EyeOff } from 'lucide-react';

const LoginSignup = () => {

  // Firebase Connection
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDgsi3z0JirwVfYXw_UzCpsDa1spq2UAgU",
  //   authDomain: "new-react-ecommerce-login-form.firebaseapp.com",
  //   projectId: "new-react-ecommerce-login-form",
  //   storageBucket: "new-react-ecommerce-login-form.appspot.com",
  //   messagingSenderId: "952738629032",
  //   appId: "1:952738629032:web:468824e231411203efc99d"
  // };
  // const app = initializeApp(firebaseConfig);
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  // const handleSignUpPopup = ()=>{
  //   signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   console.log(user);
  //   if(user){
  //     notify();
  //     setTimeout(()=>{
  //       navigate('/login');
  //     },3000);

  //   }else{
  //     alert("Something Went Wrong!!!");
  //   }
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   // ...
  // });
  // }
  //navigate

  const navigate = useNavigate();

 

  //validation of User form
  const [User, SetUSer] = useState({
    name: "",
    email: "",
    password: "",
  });

  // let name, value;
  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    SetUSer({
      ...User ,  [name]:value
    })
  };

  //Sending Data to Firebase

  const dataSendToFirebase = async(e)=>{
    e.preventDefault();
    if(User.name ==="" || User.name.length < 2){
      toast.error("Please Enter Name and must Be atleast 5 Character");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(User.email) || User.email === ""){
      toast.error("Invalid Email Address");
      return;
    }


    if(User.password.length < 8 || User.password === ""){
      toast.error("Please Enter Password and must be atleast 8 charcater");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(User)
      });
      const data = await response.json();
      console.log(data);
      if(response.ok){
        toast.success(data.message);
        navigate("/login");
      }else{
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
    }   
};

const[isPasswordVisible , setPasswordVisible] = useState(false);
    const showAndHidePassword = ()=>{
        setPasswordVisible(!isPasswordVisible);
    };
    

  return (
    <div className="main-form-div">
      <div className="signup-container">
        <div className="signup-content">
          <h2 style={{ textAlign: "center", fontSize: "30px" }}>
            Create Account
          </h2>
          <div className="signup-image">
            <img src={googleicon} alt="google_image" />
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="google_image"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="google_image"
            />
          </div>
          <form onSubmit={dataSendToFirebase}>
          <div className="input-container">
            <div className="name-container">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={User.name}
                onChange={getUserData}
                required
              />
            </div>
            <div className="email-container">
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={User.email}
                onChange={getUserData}
                required
              />
            </div>
            <div className="password-container">
              <input
                type={isPasswordVisible ?"text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={User.password}
                onChange={getUserData}
                required
              />
              <div className="EyeOff" onClick={showAndHidePassword}>
                {isPasswordVisible ?
                <span><Eye color="#000" size={"20px"}/></span>
                :( <span><EyeOff color="#000" size={"20px"}/></span>)
              }
               
              </div>
             
            </div>
            
          </div>

          <div className="login-message">
            <p style={{ fontSize: "14px", marginTop: "14px" }}>
              Alreday Have an Account?{" "}

              <Link to='/login' style={{textDecoration : "None"}}><span style={{ color: "red", cursor: "pointer" }}>Login</span></Link>
            </p>
          </div>
          <div className="Register-button">
            <button className="reg-btn">
              Register
            </button>
          </div>
          </form>
        </div>
      </div>
      <div className="toast-container">
      <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );

};

export default LoginSignup;
