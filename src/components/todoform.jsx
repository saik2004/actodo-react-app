import { useState } from "react"

function Todoform(props){

    const newActivityarr = props.newActivityarr
    const setnewActivityarr = props.setnewActivityarr
    
    const [input,setinput] = useState("")
     
    function handlechange(e){
     setinput(e.target.value)
    }

    function handleadd(){
        setnewActivityarr([...newActivityarr,{id:newActivityarr.length+1,activity:input}])
        setinput("")
    }

    return(
     <div>
          <h1 className="text-2xl font-medium mb-2">Manage Activities</h1>
          <input value={input} onChange={handlechange} type="text" className="bg-transparent border border-black outline-none text-black p-1" placeholder="Your next activity?"/>
          <button className="bg-black text-white p-1 border border-black ml-1" onClick={handleadd}>Add</button>
    </div>
    )
}

export default Todoform