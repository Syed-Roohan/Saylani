import React, { useState } from 'react'
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const onLogin = () =>{
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.email);
            if(user.email == "admin@gmail.com"){
                navigate("/admindashboard");
                setAuthenticated(true);
            }
            else{
                navigate("/userdashboard");
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthenticated(false);
            console.log(errorMessage);
    });
}
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         console.log(user);
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorMessage);
    //     // ..
    // });


// const dbRef = collection(db, "users");
// const data = {
//     email: "admin@gmail.com",
//     password: "admin123"
// }
// addDoc(dbRef, data)
// .then(docRef => {
//     console.log("Document has been added successfully");
// })
// .catch(error => {
//     console.log(error);
// })
  return (
    <div className='Login'>
    <h1>SAYLANI WELFARE</h1>
    <h3>Online Discount Store</h3>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="Email" variant="standard" value={email} onChange={(e)=> setEmail(e.target.value)}/>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label="Password" variant="standard"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
    </Box>
    { !authenticated || <span className='error'>Invalid Email & Password</span>}
    <button className='btn' onClick={onLogin}>Log in</button>
    </div>
  )
}

export default Login