import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import {fetchFirst5Symbols} from "../../utils/api";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleOnLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', true)
  }

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
  }, [isLoggedIn])


  return (
    <div
      className='flex flex-col bg-sky-200 w-full min-h-screen overflow-hidden bg-black-gradient text-dimWhite p-4 m-0 sm:px-[90px] px-[30px]'>
      <Header isLoggedIn={isLoggedIn} handleOnLogin={handleOnLogin} />
      <Main isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
}

export default App;
