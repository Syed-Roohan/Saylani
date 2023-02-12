import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { FormLabel, Grid, Input, OutlinedInput, TextField } from '@mui/material';
import { db } from '../../firebase';
const AddItems = () => {
  const [product, setProduct] = useState([{
    name: "",
    description: "",
    category: "",
    unitprice: "",
    unitname: "",
    image: ""
  }]);
  const AddItem = (e) =>{
    const itemRef = collection(db, "item");
    e.preventDefault();
    addDoc(itemRef,  product.name)
    .then(response =>{
      console.log(response);
      })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className='main-container'>
        <h3>AddItems</h3>
        <Stack direction="column" alignItems="center" spacing={2} justifyContent="center" marginTop={3}>
        <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" value={product.image} onChange={(e)=>setProduct(e.target.value)} />
        </Button>
       <FormLabel>Item Name</FormLabel>
        <OutlinedInput value={product.name} onChange={(e)=>setProduct(e.target.value)}/>
        <FormLabel>Select Category</FormLabel>
        <OutlinedInput value={product.category} onChange={(e)=>setProduct(e.target.value)}/>
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="filled"
          value={product.description} onChange={(e)=>setProduct(e.target.value)}
        />
        <Stack direction="row" alignItems="center" spacing={2} justifyContent="center" marginTop={3}>
            <FormLabel>Unit Name: </FormLabel>
            <Input placeholder='Pcs./Kg/Dozen' value={product.unitname} onChange={(e)=>setProduct(e.target.value)}/>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} justifyContent="center" marginTop={3}>
            <FormLabel>Unit Price: </FormLabel>
            <Input placeholder='$3.22' value={product.unitprice} onChange={(e)=>setProduct(e.target.value)}/>
        </Stack>
         </Stack>
         <button className='btn' onClick={AddItem}>Add</button>
       </div>
  )
}
export default AddItems;