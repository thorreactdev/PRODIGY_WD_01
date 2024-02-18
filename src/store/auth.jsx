import { createContext , useContext, useEffect, useState } from "react";

export const AuthContext =  createContext();

export const AuthProvider = ({children}) => {
    const[user , setUser] = useState("");
    const[token , setToken] = useState(localStorage.getItem("token"));


    const isLoggedin  = !!token;

    const storeToken = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token" , serverToken);
    };

    const LogoutUser = () =>{
        setToken("");
        localStorage.removeItem("token");
    }

    const userAuthentication = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user" , {
                method : "GET",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            // console.log(data);
            if(response.ok){
                setUser(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        userAuthentication();
    },[token]);

    return(

        <AuthContext.Provider value={{storeToken , userAuthentication , user , isLoggedin,LogoutUser , token }}>
           {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () =>{
    const authValue = useContext(AuthContext);
    if(!authValue){
        throw new Error("Outside of The Context Provider");
    };

    return authValue;

};