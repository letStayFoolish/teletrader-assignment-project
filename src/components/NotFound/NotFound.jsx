import {useNavigate} from "react-router-dom";

const NotFound = () => {
  // const navigate = useNavigate()
  // const handleGoBack = () => {
  //   navigate('/')
  // }

  return (
    <section className='w-full flex flex-col justify-center items-center min-h-full mt-[120px]'>
      <h1 className='font-medium text-7xl leading-9 my-8'>404</h1>
      <p className="font-medium text-4xl leading-9 my-8">NOTHING FOUND 🧐</p>
      {/*<p type='button' className='cursor-pointer hover:opacity-75 transition-all text-2xl font-light text-teal-400' onClick={handleGoBack}>*/}
      {/*  Back*/}
      {/*</p>*/}
    </section>
  )
}
export default NotFound
