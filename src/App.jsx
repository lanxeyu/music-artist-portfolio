import React from "react";
import { adventureCover, goodFaithCover, madeonLogo} from './assets'
import { Album } from './components';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

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
      
      
    </>
  )
}



export default App;