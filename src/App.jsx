import { useState } from 'react'
import adventureCover from './assets/album-adventure.png'
import goodFaithCover from './assets/album-goodfaith.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Madeon</h1>

      <section id="albums">
      <Album
          link="https://www.youtube.com/watch?v=qQWAicHiVhk&list=OLAK5uy_lDOTreSaPIgYwjZZUUPOEwaTYSlr45o00"
          text="Good Faith"
          cover={goodFaithCover}
          altText="Good Faith album cover"
      />    

      <Album
          link="https://www.youtube.com/watch?v=rO1bZdtto7I&list=OLAK5uy_lEX2ZWJ-FoqZ3jcWIGciMFASauDCOAiEA"
          text="Adventure"
          cover={adventureCover}
          altText="Adventure album cover"
      />
      </section>
      
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

function Album({link, text, cover, altText}) {
  return (
    <a href={link} target="_blank">
          <img src={cover} className="logo" alt={altText} />
          <h2>{text}</h2>
        </a>
  )

}

export { App, Album}