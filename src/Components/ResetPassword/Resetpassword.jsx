import React, { useState } from "react";
import "./Resetpassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
    const history = useNavigate();

    const notify = () =>
    toast.success("Password Reset Sucessfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [savePassword, setPassword] = useState({
    password: "",
    newpassword: "",
  });

  let name, value;
  const getResetPassword = (event)=>{
    name = event.target.name;
    value = event.target.value;
    console.log(name , value);

    setPassword({
        ...savePassword , [name] :value
    })

  }

  const sendResetPassword = async(e)=>{
    e.preventDefault();

    const {password , newpassword} =savePassword;
    if(password<8 || newpassword<8 || password!==newpassword){
        alert("Password Should Be atleast 8 Character and Password Should Match");
        return;
    }
    if(password && newpassword && password===newpassword){
        const res = await fetch('https://resetpassword-f3e6b-default-rtdb.firebaseio.com/resetpassword.json',{
        method :"POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            password,
            newpassword,
        })
    })
    if(res.ok){
        setPassword({
            password : "",
            newpassword : "",
        })
        notify();
        setTimeout(()=>{
           history('/');
        },3000)
    }else{
        alert("Fill The Form");
    }
    }else{
        alert("Password Not Matched!!");
    }

  }

  return (
    <div className="Resetpassword">
      <div className="resetConatiner">
        <div className="reset-content">
          <h2>Enter Your New Password Here</h2>
         <form method="POST">
          <div className="password-container2">
            <p style={{ margin: "14px 0px", fontSize: "14px" }}>New Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={savePassword.password}
              onChange={getResetPassword}
            />
            <p style={{ margin: "14px 0px", fontSize: "14px" }}>
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Re-Enter Password"
              name="newpassword"
              value={savePassword.newpassword}
              onChange={getResetPassword}
            />
          </div>
          <button className="reset-button" onClick={sendResetPassword}>Reset Password</button>
          </form>
        </div>
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

export default Resetpassword;
