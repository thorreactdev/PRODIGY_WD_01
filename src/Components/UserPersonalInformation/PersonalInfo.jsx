import React, { useEffect } from "react";
import "./Personalinfo.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


const PersonalInfo = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [savedData, setSavedData] = useState(null);

  const notify = () =>
   toast.success("Information Stored Sucessfully", {
     position: "top-right",
     autoClose: 3000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });
 

  useEffect(()=>{

    const fetchData = async()=>{
      try{
          const response = await fetch('http://localhost:3001/api/personalinformation/2');
          if(response.ok){
            const existingData = await response.json();
            setSavedData(existingData);
          }else{
            console.error("Fetching the Data is Failed");
          }
        
      }catch(err){
        console.error("Error during fetch");
      }

    };
    fetchData();

  },[]);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // if(!validateForm()){
    //   console.log("Form Validation Failed");
    //   return;
    // }

    if(!firstName.trim()){
      // ValidationError.firstname="First name cannot be empty.";
      alert("Name Cannot be Empty");
      return;
    }
    else if(firstName.trim().length<5){
      // ValidationError.firstname="First Name should be atleast 5 character";
      alert("name should be atleast 5 character");
      return;
    }
    if(!lastName.trim()){
      // ValidationError.firstname="Last name cannot be empty.";
      alert("last name cannot be empty");
      return;
    }
    if (!email.trim()) {
      // ValidationError.email = "Email is required";
      alert("Email cannot be empty");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // ValidationError.email = "Invalid email address";
      alert("Invalid Email address");
      return;
    }
    if (!phoneNumber.trim()) {
      // ValidationError.phoneNumber = "Phone Number is required";
      alert("Please enter a valid phone number");
      return;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      // ValidationError.phoneNumber = "Invalid phone number";
      alert("Invalid Phone Number");
      return;
    }

    if (!gender) {
      // ValidationError.gender = "Gender is required";
      alert("Select your gender");
      return;
    }

    if(firstName && lastName && email && phoneNumber && gender){
      try{
        const response = await fetch('http://localhost:3001/api/personalinformation' , {
          method:"POST",
          headers : {
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            gender,
          })
        });
  
  
        if(response.ok){
          const responseData = await response.json();
          setSavedData(responseData.data);
          console.log('Personal information saved successfully');
          notify();
        }
        else{
          console.error('Failed to save personal information');
        }
        // console.log("Form Submitted Sucessfully");
        // const data = await response.json();
        // console.log(data);
      }catch(err){
        console.error("Error During Save" +err);
      }
    };
    }

  return (

    <div className="main-personalinfor-wala-div">
      <Link to="/viewprofile" style={{textDecoration : "None" , color : "black"}}>
        <div className="back-to-my-account">
            <span>
            <i class='bx bx-caret-left'></i>
            </span>
            <p>Back To View Profile</p>
        </div>
        </Link>
      
  
    <div className="PersonalInfo">

    <h1>Personal Information</h1>
      <div className="personal-info-conatiner">
        <div className="personal-info-form">
          <form method="post"  action="/api/personalinformation">
            <div className="name-container1">
              <span>Enter First Name</span>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={savedData?.firstName || firstName}
                onChange={(e)=>{
                  setFirstName(e.target.value);
                  // setErrors({...errors , firstName : ""});
                }}
                required
              
              />
              {/* {errors.firstName && <p style={{color : "red"}}>{errors.firstName}</p>} */}
            </div>
            <div className="name-container1">
              <span>Enter Last Name </span>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="Lastname"
                value={savedData?.lastName || lastName}
                onChange={(e)=>{
                  setLastName(e.target.value);
                  // setErrors({...errors, lastName : ""});
                }}

                required
              />
              {/* {errors.lastName && <p>{errors.lastName}</p>} */}
            </div>
            <div className="name-container1">
              Enter Email ID
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={savedData?.email || email}
                onChange={(e)=>{
                  setEmail(e.target.value);
                  // setErrors({...errors , email : ""});
                
                }}
                required
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
              
            </div>
            <div className="name-container1">
              Enter Phone Number
              <input
                type="number"
                placeholder="Enter Phone Number"
                name="phonenumber"
                value={savedData?.phoneNumber || phoneNumber}
                onChange={(e)=>{
                  setPhoneNumber(e.target.value);
                  // setErrors({...errors , phoneNumber : ""});
                }}
                required
              />
              {/* {errors.phoneNumber && <p>{errors.phoneNumber}</p>} */}
            </div>
            <div className="name-container2">
              Select Gender
              {/* {errors.gender && <p>{errors.gender}</p>} */}
              <div className="male-radio">
                <input type="radio" 
                  name="gender"
                  value="Male" 
                  checked={savedData?.gender === "Male"}
                  onChange={()=> setGender("Male")}
                  required
                   />
                <span>Male</span>
              </div>
              <div className="female-radio">
                <input type="radio"
                 name="gender"
                  value="Female" 
                  checked={savedData?.gender === "Female"}
                  onChange={() => setGender("Female")}
                  required />
                <span>Female</span>
              </div>
            </div>
          <div className="save-change-btn2">
          <button className="save-change-btn" onClick={handleSubmit}>Save Changes</button>
          <button className="edit-change-btn" type="button">Edit</button>
          </div>
          </form>
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
    </div>
    </div>
  );
};

export default PersonalInfo;
