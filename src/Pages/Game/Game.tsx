import React, { useEffect, FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'

import Board from '../../Components/Board/Board'
import Logger from '../../Components/Logger/Logger'
import Arrow from '../../Components/Arrow/Arrow'
const axios = require('axios').default

interface Props {
  gameId: string
}

const mapStateToProps = (state: any) => ({ gameId: state.gameReducer.gameId })

const Game: FunctionComponent<Props> = ({ gameId }) => {
  const [board, setBoard] = useState<string[]>(new Array(9).fill(""))
  const [player1, setPlayer1] = useState<string>("")
  const [gameStatus, setGameStatus] = useState<"win" | "draw" | "playing">("playing")
  const [currentPlaying, setCurrentPlaying] = useState<string>("")
  const [winner, setWinner] = useState<string>("")

  useEffect(() => {
    const updateGameStatus = async () => {
      const getBoard = (gameId: number) => axios.get(`http://localhost:3000/games/${gameId}/board`)
      const getGameStatus = (gameId: number) => axios.get(`http://localhost:3000/games/${gameId}`)
      const gameNumber = Number(gameId)
      axios.all([getBoard(gameNumber), getGameStatus(gameNumber)]).then(
        axios.spread((board: any, gs: any) => {
          const gameStatus = gs.data.data[0].status
          setPlayer1(gs.data.data[0].usernamePlayer1)
          const newBoard = board.data.data.map((square: any) => square === player1 ? "X" : square.length > 0 ? "Y" : "")
          setBoard(newBoard)
          setGameStatus(gameStatus)
          if (gameStatus.includes("wins")) setWinner(gameStatus.split(" ")[2])
          setCurrentPlaying(gs.data.data[0].turnOf)
        })
      )
    }
    const interval = setInterval(updateGameStatus, 1000)
    return () => clearInterval(interval);
  }, [gameId, player1]);

  return (
    <div>
      <Board squares={board}/>
      <Logger name={currentPlaying} winner={winner} stateMatch={gameStatus} />
      {
        winner ||gameStatus==="draw"?
          <Arrow text="Volver" direction="right" route="/lobby" />
          :
          <div></div>
      }
    </div>
  )
}

export default connect(mapStateToProps)(Game)