import React, { useEffect, useState } from "react";
import "../Context/CSS/Login.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  

  const navigate = useNavigate();


  const[email , setEmail] = useState('');
  const[password , setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {storeToken , userAuthentication } = useAuth();

  // const sendDataToMysql = async(e)=>{
  //   // e.preventDefault();

  //   if(email && password ){
  //     try{
  //       const response = await fetch('http://localhost:5000/api/auth/login',{
  //         method:"POST",
  //         headers:{
  //           "Content-Type" : "application/json",
  //         },
  //         body:JSON.stringify({
  //           email,
  //           password,
  //         })
  //       });
  //       const data = await response.json();
  //       if(response.ok){
  //         toast.success(data.message);
  //       }
  //       else{
  //         toast.error(data.message);
  //       }

  //     }catch(err){
  //       console.log("Error in sending data to MySQL : ", err);
  //     }
  //   }
  // };


  const handleLogin = async(e)=>{
    e.preventDefault();

    
    if(email && password){
      try{
        setLoading(true);

        const response = await fetch('http://localhost:5000/api/auth/login' , {
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            email,
            password,
          })
        });
        const data = await response.json();
        console.log(data);
        if(response.ok){
            setEmail("");
            setpassword("");
            storeToken(data.token);
            userAuthentication(data.token);
            toast.success(data.message);
            setTimeout(()=>{
            navigate('/');
          },2000);
          
        }else{
          setLoading(false);
           toast.error(data.message);
        }

      }
      catch(err){
        console.error("Error During Login");
        alert("An Error Occured During Login");
      }finally{
        setLoading(false);
      }
    }else{
        alert("Please Fill the Form");
    }
  };
  

 

  return (
    <div className="Login">
      <div className="login-container">
        <div className="login-content">
          <h1>User Login</h1>
          <h3>Welcome Back</h3>
        </div>
        <form method="POST">
          <div className="input-login-field">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              
            />
          </div>

          <button className="login-btn3" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="remember-forgot-div">
            <div className="check-rember-div">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <Link to="/forgotpassword" style={{ textDecoration: "None" }}>
              <p style={{ color: "#ff4b2b" }}>Forgot Password ?</p>
            </Link>
          </div>
        </form>
        <p style={{ marginTop: "17px", fontSize: "15px" }}>
          Not Registered ?{" "}
          <Link to="/signup" style={{ textDecoration: "None" }}>
            <span style={{ color: "#ff4b2b", cursor: "pointer" }}>
              Create Account
            </span>
          </Link>
        </p>
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

export default Login;
