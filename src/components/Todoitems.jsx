function Todoitem(props){
 const activity = props.activity
 const setactivity = props.setactivity

 function handleremove(deleteid){
  const temparr = activity.filter((items)=>{
    if(items.id == deleteid){
        return false
    }
    else{
        return true
    }
  })

  setactivity(temparr)
 }

     
    return(
        <>
          {activity.length === 0 ? <p>No activity yet</p>:""}
         {
            
            activity.map((items,index)=>{
                return (
                <div className="flex justify-between">
                    <p>{index+1}. {items.activity} </p> <button onClick={()=>{handleremove(items.id)}}>Remove</button>
                </div>
                )
               
                
            })
          }
        </>
        
    )
}

export default Todoitem