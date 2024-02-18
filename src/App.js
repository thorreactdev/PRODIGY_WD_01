import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import Modal from '../src/Components/Modal/Modal.jsx'
import Forgot from './Components/ForgotPassword/Forgot.jsx';
import Resetpassword from './Components/ResetPassword/Resetpassword.jsx';
import About from './Components/About/About.jsx';
import ViewProfile from './Components/ViewProfile/ViewProfile.jsx';
import PersonalInfo from './Components/UserPersonalInformation/PersonalInfo.jsx';
import MyOrder from './Components/UserPersonalInformation/MyOrder.jsx';
import Address1 from './Components/UserPersonalInformation/Address1.jsx';
import Loader from './Components/Modal/Loader.jsx';
import LogOut from './Pages/LogOut.jsx';
// import MyOrder1 from './Components/UserPersonalInformation/MyOrder.jsx';
// import PrimeNumberFinder from 'prime-number-finder/src/PrimeNumberFinder.jsx';


function App() {
 
  return(
    
      <div>
        {/* <Loader/> */}
        <Router>
        {/* <PrimeNumberFinder/> */}
        <Navbar/>
        {/* <Modal/> */}
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category='men'/>}/>
            <Route path='/womens' element={<ShopCategory category='women'/>}/>
            <Route path='/funky' element={<ShopCategory category='funky'/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productid' element={<Product/>}/>
            </Route>
            <Route path='/signup' element={<LoginSignup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path ='/forgotpassword' element={<Forgot/>}/>
            <Route path='/resetpassword' element={<Resetpassword/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/viewprofile' element={<ViewProfile/>}>
              
            </Route>
            <Route path='/personalinfo' element={<PersonalInfo/>}/>
            <Route path='/myorder' element={<MyOrder/>}/>
            <Route path='/address' element={<Address1/>}/>
            <Route path="/logout" element={<LogOut/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>

  );
};

export default App;
