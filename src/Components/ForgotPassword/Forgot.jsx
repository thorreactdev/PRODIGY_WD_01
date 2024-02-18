import React, { useState } from "react";
import "./Forgot.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
    const history = useNavigate();

    const notify = () =>
    toast.success("Email Sent Sucessfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [Useremail, setEmail] = useState({
    email: "",
  });
  let name, value;
  const getForgotData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setEmail({
      ...Useremail,
      [name]: value,
    });
  };

  const sendingForgotData = async(e)=>{
    e.preventDefault();
    const{email} = Useremail;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email) || email === ""){
      alert("Invalid Email Address");
      return;
    }

    if(email){
        const res = await fetch('https://forgotpassword-8bf7b-default-rtdb.firebaseio.com/forgotpassword.json',{
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email
        })
    })
    if(res.ok){
        setEmail({
            email : "",
        })
        notify();
        setTimeout(()=>{
            history('/resetpassword')
        },3000)
    }else{
        alert("Fill The Email Field");
    }

    }
    
  }

  return (
    <div className="Main-forgot-div">
      <div className="forgot-container">
        <div className="forgot-content">
          <h1>Forget Something ?</h1>
          {/* <h1>Forgot Password</h1> */}
          <p className="email-text">
            Enter Your email below To Recieve Password Reset Instruction
          </p>
          <p style={{ fontSize: "15px", color: "black", marginTop: "10px" }}>
            Didn't Recieve Email?{" "}
            <span
              style={{
                color: "red",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Resend Mail
            </span>
          </p>
        </div>
        <form method="POST">  
        <div className="email-container2">
          Enter Email *
          <br />
          <input
            type="email"
            placeholder="abc@gmail.com"
            name="email"
            onChange={getForgotData}
            value={Useremail.email}
            required
          />
        </div>
        <button className="submit-forgot-button" onClick={sendingForgotData}>Submit</button>
        </form>
        <p className="Or-text">OR</p>
        <Link to="/login" style={{textDecoration : "None"}}><p style={{textAlign : "center" , color : "#ff4b2b" , cursor : "pointer" , marginTop : "10px"}}>Back To Login</p></Link>
      </div>
      <div className="toast-container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Forgot;
