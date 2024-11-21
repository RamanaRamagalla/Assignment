import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
