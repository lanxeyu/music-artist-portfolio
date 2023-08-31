import {  goodFaithCover, adventureCover } from '../../assets/index.js'
import '../../App.css'


export default function Album() {
  
  return (
    <>
      <section id="albums">

        <div>
          <a href="https://www.youtube.com/watch?v=qQWAicHiVhk&list=OLAK5uy_lDOTreSaPIgYwjZZUUPOEwaTYSlr45o00" target="_blank" rel="noreferrer">
              <img src={goodFaithCover} className="logo" alt="Good Faith album cover" />
              <p className="albumName">GOOD FAITH</p>
          </a>
        </div>

        <div>
          <a href="https://www.youtube.com/watch?v=rO1bZdtto7I&list=OLAK5uy_lEX2ZWJ-FoqZ3jcWIGciMFASauDCOAiEA" target="_blank" rel="noreferrer">
              <img src={adventureCover} className="logo" alt="Adventure album cover" />
              <p className="albumName">ADVENTURE</p>
          </a>
        </div>
      </section>
    </>
  )
}