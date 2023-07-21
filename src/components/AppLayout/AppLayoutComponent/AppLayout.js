import Navbar from "../../Navbar/Navbar";
import {Outlet} from "react-router-dom";
import React from "react";

const AppLayout =()=>(
    <div  style={{height: '100vh'}}>
        <Navbar />
        <Outlet />
    </div>
);

export {AppLayout}