import React, {Link, useState} from 'react'
import { collection, addDoc} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db} from "../../firebase"
import Box from '@mui/material/Box';
import "../Signup/Signup.css"
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
const Signup = () => {

  const [data, setData] = useState([{
    name: "",
    phone: "",
    email: "",
    password: "",
  }]);

const auth = getAuth();

  const dbRef = collection(db, "users");
  const onSubmitHandler = () =>{
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    // addDoc(dbRef, data)
    // .then(docRef => {
    //     console.log("Document has been added successfully");
    // })
    // .catch(error => {
    //     console.log(error);
    // })
  }
  
  return (
    <div className='Signup'>
        <h1>SAYLANI WELFARE</h1>
        <h3>Online Discount Store</h3>
        <div className='Signup-content'>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" value={data.name} onChange={(e)=> setData(e.target.value)}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Contact" variant="standard" value={data.contact} onChange={(e)=> setData(e.target.value)}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" value={data.email} onChange={(e)=> setData(e.target.value)}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" value={data.password} onChange={(e)=> setData(e.target.value)}/>
        </Box>
        <button className='btn' onClick={onSubmitHandler}>Sign Up</button>
        <p>Already have an account <a href='/login'>Login</a></p>
        </div>
    </div>
  )
}

export default Signup