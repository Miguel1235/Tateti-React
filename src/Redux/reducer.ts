import {combineReducers} from 'redux'

import {CHANGE_PLAYER_NAME_LOBBY,ADD_GAME_ID} from './actionTypes'

const initialState={
  namePlayerLobby:"Anon",
  gameId:"0",
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
    default:
      return state
  }
}

const rootReducer=combineReducers({nameReducer,gameReducer})

export default rootReducer