import {CHANGE_PLAYER_NAME_LOBBY,ADD_GAME_ID,CHANGE_HASH_PLAYER} from './actionTypes'

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
const changeHashPlayer=(hash:string)=>{
  return(
    {
      type:CHANGE_HASH_PLAYER,
      payload:{
        hash
      }
    }
  )
}

export {changePlayerNameLobby,addGameId,changeHashPlayer}