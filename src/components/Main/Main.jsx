import React, {useEffect, useState} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorits/Favorites";
import Details from "../../pages/Details/Details";
import {fetchFirst5Symbols} from "../../utils/api";
import useUpdatingData from "../../hooks/useUpdatingData";

const Main = ({ isLoggedIn }) => {

  return (
    <main className='w-full flex-grow mb-auto container'>
      <Routes >
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/favorites' element={
          <ProtectedRoute isLoggedIn={isLoggedIn} element={Favorites} />
        }/>
        <Route path='/details/:symbol' element={<Details isLoggedIn={isLoggedIn} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </main>
  )
}
export default Main
