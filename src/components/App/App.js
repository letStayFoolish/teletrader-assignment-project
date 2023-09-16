import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import {getSymbols} from "../../utils/api";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem('isLoggedIn') === true
  // )
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleOnLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', true)
  }

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
  }, [isLoggedIn])

  useEffect(() => {
    // handleGetData()
  }, []);

  const handleGetData = async () => {
    const data = await getSymbols()
    // const result = []
    //
    // for (let i = 0; i < 5; i++) {
    //   result.push(data[i])
    // }
    //
    // return result
    return data
  }

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
