import React from "react";
import "./Modal.css";
import { Target, X } from "lucide-react";
import { useState ,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Modal = () => {
  const navigate = useNavigate();
  const notify = () =>
  toast.success("You'll Get Latest Offer News On this Email", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const [showModal, setShowModal] = useState(false);

  const[OfferEmail , setOfferEmail] = useState({
    email:"",
  })
   let name, value;
  const getOfferEmail = (event)=>{
    name= event.target.name;
    value = event.target.value;
    setOfferEmail({
      ...OfferEmail,[name]:value
    })

  }

  const sendOfferEmail = async(e)=>{
    e.preventDefault();
    const{email} = OfferEmail;

    if(email){
      try{
        const res = await fetch('https://offeremail-default-rtdb.firebaseio.com/offeremail.json',{
           method : "POST",
           headers:{
            "Content-Type": "application/json",
           },
           body:JSON.stringify({
            email,
           })
        })
        if(res.ok){
          setOfferEmail({
            email:"",
          })
          notify();
          setTimeout(()=>{
            navigate("/");
          },3000);
        }

      }catch(err){
          console.log(err);

      }
    }else{
      alert("Please Enter Valid Email");
    }

  }

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    };

    // Attach the load event listener
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener if the component unmounts
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

 

  const closeModal = () => {
    setShowModal(false);
  };
    
  return (
    <div className="main-div">
    {showModal && (

    
    <div className="Main-Modal">
      <div className="overlay" onClick={closeModal}></div>
        <div className="Modal">
       <div className="outer-layer">
      <div className="cross-moadal-icon">
        <button className="modal-cross-icon" onClick={closeModal}>
          <X />
        </button>
        </div>
        <div className="modal-content">
          <h1>JustShop Funky Center</h1>
          <p>Get Exclsive Offer on Your Email Only on Best Seller Product</p>
          <div className="modal-input">
            <form method="POST">
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="input-box1"
                name="email"
                onChange={getOfferEmail}
                value={OfferEmail.email}
              />
            <div className="just-btn-div">
              <button type="submit" className="just-shop-btn" onClick={sendOfferEmail}>Visit Just Shop</button>
            </div>
          </form>
          </div>

        </div>
      </div>
      </div>
      </div>
      )}
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

export default Modal;
