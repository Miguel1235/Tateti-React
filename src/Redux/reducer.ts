import {combineReducers} from 'redux'

import {CHANGE_PLAYER_NAME_LOBBY,ADD_GAME_ID,CHANGE_HASH_PLAYER} from './actionTypes'

const initialState={
  namePlayerLobby:"Anon",
  gameId:"0",
  hashPlayer:"",
}

const nameReducer=(state=initialState,action:any)=>{
  switch (action.type) {
    case CHANGE_PLAYER_NAME_LOBBY:
        return Object.assign({},state,{namePlayerLobby:action.payload.newName})
    default:
      return state
  }
}

const gameReducer=(state=initialState,action:any)=>{
  switch (action.type) {
    case ADD_GAME_ID:
      return(Object.assign({},state,{gameId:action.payload.gameId}))
    case CHANGE_HASH_PLAYER:
      return(Object.assign({},state,{hashPlayer:action.payload.hash}))
    default:
      return state
  }
}

const rootReducer=combineReducers({nameReducer,gameReducer})

export default rootReducer