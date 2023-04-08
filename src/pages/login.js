import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase"

export default function Login()
{
const history=useNavigate()
const {firebase}=useContext(FirebaseContext)

const [emailAddress,setEmailAddress]=useState('');
const [password,setPassword]=useState('');

const [error,setError]=useState('')
const isInvalid = password ===''||emailAddress===''

const handleLogin=()=>{};

useEffect(()=>{
document.title='Login-instagram'
},[]);

return(
<div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
</div>
</div>
</div>
);
}