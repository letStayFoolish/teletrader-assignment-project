import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import {handleGetFromLocalStorage, handleSaveToLocalStorage} from "../../utils/utils";
import {useLocation} from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const pathname = useLocation().pathname

  const routes = pathname === '/' || pathname === '/favorites' || pathname === '/details/:symbol'

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
      {routes && <Header isLoggedIn={isLoggedIn} handleOnLogin={handleOnLogin} />}
      <Main isLoggedIn={isLoggedIn} />
      {routes && <Footer />}
    </div>
  );
}

export default App;
