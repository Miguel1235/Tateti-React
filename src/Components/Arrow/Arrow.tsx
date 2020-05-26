import React,{FunctionComponent} from 'react'
import {Link} from 'react-router-dom'
import './Arrow.css'

interface Props{
  direction:"left"|"right"
  text:string
  route:"/"|"/game"|"/lobby"
}

const Arrow:FunctionComponent<Props>=({direction,text,route})=>{
  if(direction==="left"){
    return(
     <Link to={route} style={{ color: "inherit", textDecoration:"inherit"}}>
       <div className="arrowContainer">
         <p className="text">{text}</p>
         <div className={`arrow ${direction}`}></div>
       </div>
      </Link>
    )
  }
  else{
    return(
            <Link
              to={route}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="arrowContainer">
                <div className={`arrow ${direction}`}></div>
                <p className="text">{text}</p>
              </div>
            </Link>

    )
  }
//  direction==="left"?
//     <Link to={route} style={{ color: "inherit", textDecoration:"inherit"}}>
//       <div className="arrowContainer">
//         <p className="text">{text}</p>
//         <div className={`arrow ${direction}`}></div>
//       </div>
//      </Link>
//   :
//            <Link
//              to={route}
//              style={{ color: "inherit", textDecoration: "inherit" }}
//            >
//              <div className="arrowContainer">
//                <div className={`arrow ${direction}`}></div>
//                <p className="text">{text}</p>
//              </div>
//            </Link>
}
export default Arrow