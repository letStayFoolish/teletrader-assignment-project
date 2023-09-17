import React, {useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {handleGetFromLocalStorage, handleSaveToLocalStorage} from "../../utils/utils";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "../../pages/Home/Home";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Favorites from "../../pages/Favorites/Favorites";
import Details from "../../pages/Details/Details";
import NotFound from "../NotFound/NotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  // Solution with pathname, to hide header & footer if needed
  // const routes = pathname === '/' || pathname === '/favorites' || pathname.startsWith('/details')


  const handleOnLogin = () => {
    setIsLoggedIn(true)
    handleSaveToLocalStorage('isLoggedIn', true)
  }

  useEffect(() => {
    const state = handleGetFromLocalStorage('isLoggedIn')

    if (state) {
      setIsLoggedIn(state)
      navigate(pathname)
    } else {
      setIsLoggedIn(false)
    }

  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <div
        className='flex flex-col bg-sky-200 w-full min-h-screen overflow-hidden bg-black-gradient text-dimWhite p-4 m-0 sm:px-[90px] px-[30px]'>
        <Header isLoggedIn={isLoggedIn} handleOnLogin={handleOnLogin} />
        <main className='w-full flex-grow mb-auto container'>
          <Routes >
            <Route path='/' index={true} element={<Home />} />
            <Route path='/favorites' element={
              <ProtectedRoute
                element={<Favorites />}
                isLoggedIn={isLoggedIn}
              />
            }/>
            <Route path='/details/:symbol' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
