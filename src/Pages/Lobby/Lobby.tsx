import React, { useEffect, FunctionComponent, useState } from 'react'
import './Lobby.css'

import Match from '../../Components/Match/Match'

import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { addGameId } from '../../Redux/actions'
const axios = require('axios').default

const mapStateToProps = (state: any) => { return ({ username: state.nameReducer.namePlayerLobby }) }
const mapDispatchToProps = (dispatch: any) => { return ({ addGameId: (gameId: string) => dispatch(addGameId(gameId)) }) }

interface Props {
  username: string,
  addGameId(gameId: string): void,
  history: any,
}

const Lobby: FunctionComponent<Props> = ({ username, addGameId, history }) => {
  const [games, setGames] = useState<any[]>([])
  const [gameId, setGame] = useState<string>("")

  const getGames = async () => {
    const games = await axios.get('http://localhost:3000/games')
    setGames(games.data.data)
  }
  const createGame = async () => {
    const newGame = await axios.post('http://localhost:3000/games', { username })
    addGameId(newGame.data.data[0])
  }
  const addPlayerToMatch = async () => {
    const number = Number(gameId)
    await axios.put(`http://localhost:3000/games/${number}`, { username })
    history.push("/game")
    addGameId(gameId)
  }

  useEffect(() => {
    const interval = setInterval(getGames, 3000)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lobbyContainer">
      <div className="name">{username}</div>
      <div className="gameContainer">
        {
          games.map((game, i) =>
            <Match number={game.split(":")[1]} key={i} />
          )
        }
      </div>
      <input type="text" onChange={(event) => setGame(event.target.value)} />
      {
        gameId.length !== 0 && Number(gameId) ?
          <button className="button" onClick={() => addPlayerToMatch()}>Unirse a la partida</button>
          :
          <p>Ingresa un juego para comenzar la partida</p>
      }
      <div>
        <hr />
        <Link to="/waiting">
          <button className="button" onClick={() => createGame()}>Crear un juego </button>
        </Link>
      </div>
    </div>
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lobby))