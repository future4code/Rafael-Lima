import React from 'react'
import homePage, { Homepage } from './pages/HomePage/homePage'
import { MatchesPage } from './pages/MatchesPage/MatchesPage'

const App = () => {
  //renderização condicional vai aqui
  //estado que diz qual é a tela que está aparecendo
  //função pra mudar de tela


  return(
    <div>
      Astromatch
      <Homepage/>
      <MatchesPage/>
      </div>
  )
}

export default App