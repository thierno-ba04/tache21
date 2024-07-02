import React, {useContext} from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { Dashboard } from "../../dashboard/Dashboard";
import {  UserContext } from "../usercontext";



const PrivateRoutes = () => {
   const {currentUser} =  useContext(UserContext);

    if (!currentUser) {
      <Navigate to={"/"}  />
  } else {
    return (
      <div className='container'>
          <Outlet /> 
      </div>
    )
  }


}

export default PrivateRoutes