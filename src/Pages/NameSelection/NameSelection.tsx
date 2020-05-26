import React,{FunctionComponent, useState} from 'react'
import {connect} from 'react-redux'
import './NameSelection.css'

import Arrow from '../../Components/Arrow/Arrow'
import {changePlayerNameLobby} from '../../Redux/actions'

const mapStateToProps=(state:any)=>({})
const mapDispatchToProps=(dispatch:any)=>({
  changePlayerNameLobby:(newName:string)=>dispatch(changePlayerNameLobby(newName))
})

interface Props{
  changePlayerNameLobby(newName:string):void
}

const NameSelection:FunctionComponent<Props>=({changePlayerNameLobby})=>{
  const [name,changeName]=useState<string>("")
  return(
     <div className="container">
         <label>Nombre</label> <input type="text" onChange={(event)=>changeName(event.target.value)}/>
         {
           name.length>0?
              <div onClick={()=>changePlayerNameLobby(name)}>
                <Arrow text="Jugar" direction="left" route="/lobby"/>
              </div>
            :
              <p>Ingresa un numero de usuario primero!</p>
         }
     </div>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(NameSelection)