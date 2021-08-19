import * as React from "react"

import Menu from "./components/menu";      // Menu
import Pokemons from "./components/Pokemons";      // pokemon page
import CareerForm from "./components/career-form";      // career page
import ProdForm from "./components/prod-form";          // product page

export default function MainForm() {

  const [homework, setHomework] = React.useState('pokemon');                 // initialise to career


    return (
        <>
        <Menu goPokemon={() => setHomework('pokemon')}
              goCareer={() => setHomework('career')}
              goMarket={() => setHomework('prod')}
         />
        {homework==='career' && (<CareerForm />)}
        {homework==='prod' && (<ProdForm />)}
        {homework==='pokemon' && (<Pokemons />)}
        </>
    )
}
