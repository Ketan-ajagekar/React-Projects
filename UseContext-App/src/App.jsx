//This is use of useContext to share data between components without props drilling
//Props drilling means passing data from parent to child component through multiple levels of components
//and it can make the code hard to read and maintain.
//To avoid props drilling we can use useContext hook in react

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './Component/A'
import { createContext } from 'react'
export let countcontext=  createContext()
function App() {
  const [count, setCount] = useState(90)
  const [name,setName]= useState("Ketan")

  return (
    <>
      <countcontext.Provider value={[count,name]}>
        <A></A>
      </countcontext.Provider>
    </>
  )
}

export default App
