import React,{FunctionComponent, useState} from 'react'
import {connect} from 'react-redux'
import './NameSelection.css'

import Arrow from '../../Components/Arrow/Arrow'
import {changePlayerNameLobby, changeHashPlayer} from '../../Redux/actions'

import { withRouter } from 'react-router-dom'

const axios=require('axios').default

const mapStateToProps=(state:any)=>({})
const mapDispatchToProps=(dispatch:any)=>({
  changePlayerNameLobby:(newName:string)=>dispatch(changePlayerNameLobby(newName)),
  changeHashPlayer:(hash:string)=>dispatch(changeHashPlayer(hash))
})

interface Props{
  changePlayerNameLobby(newName:string):void,
  changeHashPlayer(hash:string):void,
  history:any
}

const NameSelection:FunctionComponent<Props>=({changePlayerNameLobby,changeHashPlayer,history})=>{

  const [name,changeName]=useState<string>("")
  const [hash,changeHash]=useState<string>("")

  const changeStatus=(hash:string,name:string)=>{
    changeHashPlayer(hash)
    changePlayerNameLobby(name)
  }

  const getUser=async ()=>{
    const user = await axios.get(`http://localhost:3000/users/${hash}`)
    changeStatus(hash,user.data.data.username)
    history.push("/lobby")
  }

  const createUser=async ()=>{
    const user = await axios.post(`http://localhost:3000/users/`,{username:name})
    changeStatus(user.data.data[0],name)
    history.push("/lobby")
  }

  return(
     <div className="container">
         <label>Registrate</label> <input type="text" onChange={(event)=>changeName(event.target.value)}/>
         {
           name.length>0?
              <div onClick={()=>createUser()}>
                <Arrow text="Jugar" direction="left" route="/"/>
              </div>
            :
              <p>Ingresa un numero de usuario primero!</p>
         }


         <label>Ingresa con tu hash</label> <input type="text" onChange={(event)=>changeHash(event.target.value)}/>
         {
           hash.length>0?
              <div onClick={()=>getUser()}>
                <Arrow text="Jugar" direction="left" route="/"/>
              </div>
            :
              <p>Ingresa un hash valido primero!</p>
         }
     </div>
  )
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NameSelection))