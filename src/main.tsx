import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { PokemonPage } from './03-examples/pokemonPage'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafifcLigth'


// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight /> */}
    <PokemonPage />
    {/* <FocusScreen /> */}
  </StrictMode>,
)
