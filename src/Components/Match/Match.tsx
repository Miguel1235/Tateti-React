import React,{useEffect,FunctionComponent, useState} from 'react'

import './Match.css'

const axios=require('axios').default

interface Props{
  number:string
}

const Match:FunctionComponent<Props>=({number})=>{
  const [gameStatus,setGamesStatus]=useState<string>("")

   useEffect(() => {
      const fetchStatus=async ()=>{
        const numberInt=Number(number)
        const status=await axios.get(`http://localhost:3000/games/${numberInt}`)
        setGamesStatus(status.data.data[0].status)
      }
     fetchStatus()
   },[number]);
  return(
    <div className="card">
      <h5>Partida {number}</h5>
      <h6>{gameStatus}</h6>
    </div>
  )
}
export default Match