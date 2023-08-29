import { useState } from 'react'
import adventureCover from './assets/album-adventure.png'
import goodFaithCover from './assets/album-goodfaith.png'
import madeonLogo from './assets/madeon-logo.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={madeonLogo} id="madeonLogo" alt="Madeon logo" />

      <section id="albums">
        <div>
          <Album
              link="https://www.youtube.com/watch?v=qQWAicHiVhk&list=OLAK5uy_lDOTreSaPIgYwjZZUUPOEwaTYSlr45o00"
              text="GOOD FAITH"
              cover={goodFaithCover}
              altText="Good Faith album cover"
          />    
          <p>likes</p>
        </div>

        <div>
          <Album
              link="https://www.youtube.com/watch?v=rO1bZdtto7I&list=OLAK5uy_lEX2ZWJ-FoqZ3jcWIGciMFASauDCOAiEA"
              text="ADVENTURE"
              cover={adventureCover}
              altText="Adventure album cover"
          />
          <p>likes</p>
        </div>
      </section>
      
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

function Album({link, text, cover, altText}) {
  const albumStyle = {
    // Insert styling here
  };
  return (
    <a href={link} target="_blank" style={albumStyle}>
          <img src={cover} className="logo" alt={altText} />
          <p class="albumName">{text}</p>
        </a>
  )
}


export { App, Album}