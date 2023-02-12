import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import NoPage from './components/NoPage/NoPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from './components/SplashScreen/SplashScreen';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UserDashboard from './components/userdashboard/UserDashboard';
import AllProduct from './components/AllProduct/AllProduct';
import AddItems from './components/AddItems/AddItems';
import Accounts from './components/Accounts/Accounts';

function App() {
  return (
    <div className="App">
      {/* <SplashScreen/> */}
      {/* <Signup/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/products" element={<AllProduct/>}/>
        <Route path="/additems" element={<AddItems/>}/>
        <Route path="/accounts" element={<Accounts/>}/>
        <Route path="/userdashboard" element={<UserDashboard/>}/>
        <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
