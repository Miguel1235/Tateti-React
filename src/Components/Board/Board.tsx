import React,{FunctionComponent} from 'react'

import Square from  '../Square/Square'

import {connect} from 'react-redux'

import './Board.css'

const axios=require('axios').default

interface Props{
  squares:Array<string>
  gameId:string,
  namePlayerLobby:string
}

const mapStateToProps=(state:any)=>{
  return(
    {
      namePlayerLobby:state.nameReducer.namePlayerLobby,
      gameId:state.gameReducer.gameId,
    }
  )
}

const Board:FunctionComponent<Props>=({squares,gameId,namePlayerLobby})=>{
   const handleClick=async (event:React.MouseEvent,number:number)=>{
     await axios.post(`http://localhost:3000/games/${gameId}/board`,{username:namePlayerLobby,move:number.toString()})
   }
   return(
     <div className="board">
       {
         squares.map((square,i)=>
           <Square mark={square} key={i} number={i} handleClick={handleClick}/>
         )
       }
     </div>
   )
}
export default connect(mapStateToProps)(Board)