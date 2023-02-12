import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./AdminDashboard.css"
// ---
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AllProduct from '../AllProduct/AllProduct';
import AddItems from '../AddItems/AddItems';
import Accounts from '../Accounts/Accounts';
import { IconButton } from '@mui/material';
import "../AdminDashboard/AdminDashboard.css"
const AdminDashboard = () => { 
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Saylani Discount Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/products" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/additems" className='nav-link'>Add Items</Link>
                </li>
                <li className="nav-item">
                <Link to="/accounts" className='nav-link'>Accounts</Link>
                </li>
                <div className='sideIcon'>
                <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon/>
                </IconButton>
                </div>
            </ul>
            </div>
        </div>
        </nav>
        </div>
        <h3> Welcome To AdminDashboard</h3>
        <AllProduct/>
    
    </div>
  )
}

export default AdminDashboard;