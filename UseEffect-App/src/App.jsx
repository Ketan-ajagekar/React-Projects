import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Mainly used to handle side effects in functional components.
// Side effects can include data fetching, subscriptions, or manually changing the DOM in React components.
//One Example of UseEffect Hook we used in Random Password Generator Project.
function App() {
  const [count, setCount] = useState(0)
  //This is useEffect Hook examples
  useEffect(()=>{
    console.log("It will runs on every render");
    
  })

  useEffect(()=>{  // Not used more in real time application
    console.log("It will runs only first render");
    
  },[])

  useEffect(()=>{  //Mainly used in real time application. Because we can pass the dependencies in array.
    console.log("It will runs only when dependenices get change..");
    
  },[count]) // We can pass multiple dependencies in one array like [count, name, age].

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
