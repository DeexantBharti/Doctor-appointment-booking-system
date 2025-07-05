import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Optional
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import axios from 'axios';
export default function OAuth() {
   const navigate = useNavigate();
   const { backendUrl, setToken} = useContext(AppContext);
//    const backendUrl = "http://localhost:4000"
   const handleGoogleClick = async () => {
    try {
        const Provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result  = await signInWithPopup(auth,Provider);

        // console.log(result);// temporary
       
        const { displayName: name, email, uid,photoURL } = result.user;
const { data } = await axios.post(`${backendUrl}/api/user/google`, {
  name: name || "", // Handle possible null/undefined
  email,
  photoURL,
  googleId: uid // Use uid as googleId
});


        if(data.success){
            localStorage.setItem('token',data.token);
            setToken(data.token);
            toast.success("google login successful");
            navigate('/');
        }
    } catch (error) {
        console.error("google auth error: ", error);
        toast.error(error.response ?.data?.message || "google authentication failed");
    }
   }

    return (
       
        <button type='button' onClick = {handleGoogleClick} className='bg-pink-700 text-white w-full py-2 hover:cursor-pointer rounded-md text-base hover:opacity-95 uppercase'>continue with google    </button>
    );
}
