import React,{FunctionComponent} from 'react'

import './Square.css'

interface Props{
  mark:string,
  number:number,
  handleClick(event:React.MouseEvent,number:number):void
}

const Square:FunctionComponent<Props>=({mark,number,handleClick})=>{
  return(
    <div>
      <button className="square" onClick={(event)=>handleClick(event,number)}>{mark}</button>
    </div>
  )
}

export default Square