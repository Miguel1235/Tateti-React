import React, { useEffect, FunctionComponent } from 'react'
import './Waiting.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const axios = require('axios').default

interface Props {
  gameId: string
  history: any
}

const mapStateToProps = (state: any) => { return ({ gameId: state.gameReducer.gameId }) }

const Waiting: FunctionComponent<Props> = ({ gameId, history }) => {

  useEffect(() => {
    const getGameStatus = async () => {
      const number = Number(gameId)
      if (number !== 0) {
        const games = await axios.get(`http://localhost:3000/games/${number}`)
        const player2 = games.data.data[0].usernamePlayer2
        if (player2.length !== 0) history.push("/game")
      }
    }
    const interval = setInterval(getGameStatus, 3000)
    return () => clearInterval(interval);
  }, [gameId, history]);

  return (
    <div>
      <h3 className="container">Esperando a que un jugador se una a la partida {gameId}</h3>
      <div className="container">
        <div className="lds-roller">
          <div>
          </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}
export default withRouter(connect(mapStateToProps)(Waiting))