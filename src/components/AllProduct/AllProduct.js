import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';

const AllProduct = () => {
  const [item, setItem] = useState([
  ]);
  useEffect(()=>{
    getitem();
  },[])
  useEffect(()=>{
    console.log(item);
  },[item])
  const getitem  = () => {
    const itemRef = collection(db, "item");

    getDocs(itemRef)
    .then(response =>{
      const item = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      setItem(item);
    })
    .catch((error)=>{
      console.log(error);
    })


  }
  return (
    <div>
      <h3>All Products</h3>
    <ul>
      {item.map(item =>(
        <>
        <Card sx={{ maxWidth: 345 }} className="card" key={item.id}>
      <CardMedia
        component="img"
        alt="Rendering..."
        height="140"
        image={item.data.image}
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title: {item.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {item.data.category}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          Description: {item.data.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Unit Name: {item.data.unitname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Unit Price: {item.data.unitprice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
        {/* <li key={item.id}>{item.data.name}</li>
        <li>{item.data.description}</li>
        <li>{item.data.category}</li>
        <li>{item.data.unitname}</li>
        <li>{item.data.unitprice}</li> */}
        </>
      ))}
      {/*{item.map((element)=>{
    return(
    <Card sx={{ maxWidth: 345 }} className="card" key={item.id}>
      <CardMedia
        component="img"
        alt="Rendering..."
        height="140"
        image={item.image}
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title: {item.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {item.data.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {item.data.descripiton}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Unit Name: {item.data.unitname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Unit Price: {item.data.unitprice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    )})} */}
    </ul>
    </div>
  )
}

export default AllProduct