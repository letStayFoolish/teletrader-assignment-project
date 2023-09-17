import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {handleGetFromLocalStorage, handleSaveToLocalStorage} from "../../utils/utils";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/Home/Home";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Favorites from "../../pages/Favorits/Favorites";
import Details from "../../pages/Details/Details";
import NotFound from "../NotFound/NotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // Solution with pathname, to hide header & footer if needed
  // const pathname = useLocation().pathname
  // const routes = pathname === '/' || pathname === '/favorites' || pathname.startsWith('/details')

  const handleOnLogin = () => {
    setIsLoggedIn(true)
    handleSaveToLocalStorage('isLoggedIn', true)
  }

  useEffect(() => {
    setIsLoggedIn(handleGetFromLocalStorage('isLoggedIn'))
  }, [isLoggedIn])

  return (
    <div
      className='flex flex-col bg-sky-200 w-full min-h-screen overflow-hidden bg-black-gradient text-dimWhite p-4 m-0 sm:px-[90px] px-[30px]'>
      <Header isLoggedIn={isLoggedIn} handleOnLogin={handleOnLogin} />
      <main className='w-full flex-grow mb-auto container'>
        <Routes >
          <Route path='/' index={true} element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path='/favorites' element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Favorites}
            />
          }/>
          <Route path='/details/:symbol' element={<Details isLoggedIn={isLoggedIn} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
