import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navber/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div >
    );
};

export default Home;