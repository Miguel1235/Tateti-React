import React,{FunctionComponent} from 'react'

import './Logger.css'

interface Props{
  name:string
  stateMatch:"win"|"draw"|"playing",
  winner:string
}

const Logger:FunctionComponent<Props>=({name,stateMatch,winner})=>{
  let state="playing"
  if(stateMatch.includes("win")){
      state="win"
  }
  else if(stateMatch.includes("draw")){
    state="draw"
  }
    switch (state) {
      case "playing":
        return(
          <div>
            <hr/>
              <p className="log">Es el turno de {name}</p>
            <hr/>
          </div>
        )
      case "win":
        return(
          <div>
            <hr/>
        <p className="log">Gano el jugador {winner}!!!</p>
            <hr/>
          </div>
        )
      case "draw":
        return(
          <div>
            <hr/>
            <p className="log">Hay empate</p>
            <hr/>
          </div>
        )
      default:
        return(
          <div>
            <hr/>
              <p>WTF</p>
            <hr/>
          </div>
        )
    }
}
export default Logger