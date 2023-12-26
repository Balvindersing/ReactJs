import { useContext, useEffect, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import MyUserContext from './context/userContext'

function App() {
  //const [count, setCount] = useState(0);
  const useContextAPI = useContext(MyUserContext);
  console.log(useContextAPI)
  const counterHandler = () => {
    //setCount((count) => count + 1);
    useContextAPI.setUser(useContextAPI.userName + 1);
  }
  useEffect(() => {
    console.log("------" + Math.random())
  })
  return (
    <>
      <h1>React Context-API Hook Demo <br/> [Without props-drilling] </h1>
      <div className='main-div'>  <button className='button-18 mg-t' onClick={counterHandler}>Click me {useContextAPI.userName}</button>

        <ChildComponent></ChildComponent></div>
    </>
  )
}

export default App
