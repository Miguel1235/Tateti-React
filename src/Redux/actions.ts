import {CHANGE_PLAYER_NAME_LOBBY,ADD_GAME_ID,} from './actionTypes'

const changePlayerNameLobby=(newName:string)=>{
  return(
    {
      type:CHANGE_PLAYER_NAME_LOBBY,
      payload:{
        newName
      }
    }
  )
}
const addGameId=(gameId:string)=>{
  return(
    {
      type:ADD_GAME_ID,
      payload:{
        gameId
      }
    }
  )
}

export {changePlayerNameLobby,addGameId}