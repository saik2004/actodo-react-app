
import Todoitem from "./Todoitems"

function Todolist(props){
    
    const newActivityarr = props.newActivityarr
    const setnewActivityarr = props.setnewActivityarr



    return(
       <div className="bg-violet-400 p-5 flex-grow rounded-sm">
          <h1 className="text-2xl font-medium mb-2">Today Activity</h1>
          <div>
            <Todoitem activity={newActivityarr} setactivity={setnewActivityarr}/>
          </div>
          
        </div>
    )
}

export default Todolist