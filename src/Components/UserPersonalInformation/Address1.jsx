import React, { useEffect, useState } from "react";
import "./Address1.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Plus } from 'lucide-react';

const Address1 = () => {
  const notify = () =>
  toast.success("Hurray !! Address Received 🎉🎉", {
    position: "top-right",
    autoClose: 1700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const[savedData , setSavedData] = useState(null);
  const[address , setaddress] =  useState({
    fullname : "",
    mobilenumber : "",
    pincode : "",
    city : "",
    state : "",
    addr : "",
    area : "",
    landmark : "",
    addre : "",
  })
  const[showAdressForm  , setShowAddressForm] = useState(false);

  const handleAddressChange = (e)=>{
    setaddress({...address,[e.target.name]: e.target.value})
  }

  const handleAddNewAddressForm = ()=>{
    setShowAddressForm(true);
  }

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('http://localhost:3001/api/address/9324751785');
        if(response.ok){
          const data= await response.json();
          setSavedData(data);
        }else{
          console.log("error fetching the Data");
        }

      }catch(err){
        console.log(err);
      }
    }
    fetchData();

  },[]);

  const handleAdressData = async(e)=>{
    e.preventDefault();
    const{fullname , mobilenumber , pincode ,city, state,addr,area,landmark , addre} = address;

    if(fullname && mobilenumber && pincode && city && state && addr && area && landmark && addre){
      try{
        const response = await fetch('http://localhost:3001/api/address',{
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            fullname,
            mobilenumber,
            pincode,
            city,
            state,
            addr,
            area,
            landmark,
            addre,
          })
        });

        if(response.ok){
          notify();
          setaddress({
            fullname : "",
            mobilenumber : "",
            pincode : "",
            city : "",
            state : "",
            addr : "",
            area : "",
            landmark : "",
            addre : "",
          });
          const responseData = await response.json();
          console.log(responseData);
          // setSavedData(responseData);
          console.log(setSavedData(responseData));
          

          
        }else{
          throw new Error("Something went wrong!");
        }


      }catch(err){
        console.error("Error Sending Data");
      }

    }else{
      alert("Please Fill All Fields")
    }

  };
  return (
    <div className="Address1">
      <Link
        to="/viewprofile"
        style={{ textDecoration: "None", color: "black" }}
      >
        <div className="back-to-my-account">
          <span>
            <i class="bx bx-caret-left"></i>
          </span>
          <p>Back To View Profile</p>
        </div>
      </Link>
      <h1>Your Address</h1>
      <div className="line-wala-div"></div>

      {
        savedData ? 
      (
      <div className="address-deatil-box">
      <div className="address-saved-content">
         <div className="full-name-and-home">
            <p style={{fontSize : "18px" , fontWeight : "550" , textTransform : "capitalize"}}>{savedData?.fullname}</p>
            <p style={{backgroundColor : "#f2f2f2" , padding: "3px 6px" , fontSize: "14px" ,borderRadius:"2px"}}>{savedData?.addre}</p>
         </div>


         <div className="address-details-db">
         <p>{savedData?.addr}</p>
         {/* <p>B1 Hirakunj Society near bhanushali wadi asalpha ghatkopar(w) </p> */}
         </div> 


          <div className="city-and-state">
              <p>{savedData?.city},</p>
              <p>{savedData?.state}</p>
          </div>

          <div className="city-and-pincode">
          <p>{savedData?.city},</p>
          <p>{savedData?.pincode}</p>
          </div>
          <div className="contact-number">
            <p>Contact Number : {savedData?.mobilenumber}</p>
          </div>
         
          {/* <p><strong>Area/Locality:</strong> {savedData?.area}</p>
          <p><strong>Landmark:</strong> {savedData?.landmark}</p>
          <p>Address Type : {savedData?.addre}</p> */}
      </div>
      <div className="address-saved-content">
         
        <div className="add-icon">
            <span className="plus-icon" onClick={handleAddNewAddressForm}><Plus size={60} color="#51cccc"/></span>
            <p style={{textAlign : "center" , fontSize : "17px"}}>Add New Address</p>
        </div>
      </div>
      </div>
       ) : (
        showAdressForm ?
        (
      <div className="address1-main">
        <div className="address-main-conatiner">
          <div className="address-form-content">
            <form>
              <div className="form-group-address">
                <span>Enter Full Name</span>
                <input type="text"
                name="fullname"
                 placeholder="Enter Full Name"
                 value={savedData?.fullname || address.fullname}
                 onChange={handleAddressChange}
                 required
                 
                 />
              </div>

              <div className="form-group-address">
                <span>Enter Mob/Phone</span>
                <input type="number" 
                name="mobilenumber"
                placeholder="Enter Mobile Number" 
                value={savedData?.mobilenumber || address.mobilenumber}
                onChange={handleAddressChange}
                required
                
                />
              </div>
              <div className="form-group-address">
                <span>Enter Pincode/Postal Code</span>
                <input type="number"
                name="pincode"
                 placeholder="Enter Postal Code"
                 value={savedData?.pincode || address.pincode}
                 onChange={handleAddressChange}
                 required
                 
                 />
              </div>
              <div className="form-group-address">
                <span>Enter City</span>
                <input type="text" 
                name="city"
                placeholder="Enter City" 
                value={savedData?.city || address.city}
                onChange={handleAddressChange}
                required
                />
              </div>
              <div className="form-group-address">
                <span>Enter State</span>
                <input type="text" 
                name="state"
                placeholder="Enter State" 
                value={savedData?.state || address.state}
                onChange={handleAddressChange}
                required
                />
              </div>

              <div className="form-group-address">
                <span>Enter Address</span>
                <input type="text"
                name="addr"
                placeholder="Enter Address" 
                value={savedData?.addr || address.addr}
                onChange={handleAddressChange}
                required
                />
              </div>



              <div className="form-group-address">
                <span>Enter Area/Locality</span>
                <input type="text" 
                placeholder="Enter Area/Locality"
                name="area"
                value={savedData?.area || address.area}
                onChange={handleAddressChange}
                required
                 />
              </div>
              <div className="form-group-address">
                <span>Enter Landmark(optional)</span>
                <input type="text" 
                name="landmark"
                value={savedData?.landmark || address.landmark}
                onChange={handleAddressChange}
                placeholder="Enter Landmark"
                 />
              </div>

              <div className="save-the-address-as">
                Select Adress Type
                <input type="radio" 
                name="addre" 
                value="Home"
                checked={address.addre ===  "Home"}
                onChange={handleAddressChange}
                 />Home

                <input type="radio"
                 name="addre" 
                 value="Office" 
                 checked={address.addre === "Office"}
                 onChange={handleAddressChange}
                 />
                 Office
                {/* <button className="Home-address">Home</button> */}
                {/* <button className="office-address">Office</button> */}
              </div>

              <div className="save-add-btn">
                <button className="save-add-btn3" onClick={handleAdressData}>Save Address</button>
              </div>
            </form>
          </div>
        </div>
      </div>
         ) :null
       )}
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
          theme="light"
        />
      </div>
    </div>
  );
};

export default Address1;
