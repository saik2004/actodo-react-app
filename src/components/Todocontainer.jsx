import Todoform from "./todoform"
import Todolist from "./Todolist"

import { useState } from "react"

function Todocontainer(){
    const[newActivityarr,setnewActivityarr] = useState([{id:1,activity:"gym"},{id:2,activity:"study"}])
    return(
      <>
      <Todoform newActivityarr={newActivityarr} setnewActivityarr={setnewActivityarr}/>
      <Todolist newActivityarr={newActivityarr} setnewActivityarr={setnewActivityarr}/>
      </>
    )
}

export default Todocontainer