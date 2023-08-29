import { useState } from 'react'
import adventureLogo from './assets/album-adventure.png'
import goodFaithLogo from './assets/album-goodfaith.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Madeon</h1>
      <div>
        <a href="https://www.youtube.com/watch?v=qQWAicHiVhk&list=OLAK5uy_lDOTreSaPIgYwjZZUUPOEwaTYSlr45o00" target="_blank">
          <img src={goodFaithLogo} className="logo" alt="Good Faith album logo" />
          <h2>Good Faith</h2>
        </a>

        <a href="https://www.youtube.com/watch?v=rO1bZdtto7I&list=OLAK5uy_lEX2ZWJ-FoqZ3jcWIGciMFASauDCOAiEA" target="_blank">
          <img src={adventureLogo} className="logo react" alt="Adeventure album logo" />
          <h2>Adventure</h2>
        </a>

      </div>
      
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
