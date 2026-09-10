import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props){
    
    const navigate = useNavigate()

    const [eUername,seteUsername] = useState("")
    const [ePass,setePass] = useState("")

    const user = props.user
    const setuser = props.setuser
    
    function handleusernameinput(e){
       seteUsername(e.target.value)
    }

    function handleepasswordinput(e){
      setePass(e.target.value)
    }

    function handlesignup(){
       setuser([...user,{ username:eUername,pass:ePass}])
       navigate("/")
    }

    return(
      <div className="bg-black p-10 ">
        <div className="bg-white p-10 border border-black rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi!</h1>
            <p>i help you manage your activities after you Signup :)</p>

            <div className="flex flex-col gap-2 w-60 my-2">
                <input type="text" value={eUername} onChange={handleusernameinput} placeholder="username" className="border border-black p-2 w-80% rounded-md"/>
                <input type="text" value={ePass} onChange={handleepasswordinput} placeholder="password" className="border border-black p-2 w-80% rounded-md"/>
                 <input type="text" placeholder="Confirm password" className="border border-black p-2 w-80% rounded-md"/>
                <button className="bg-amber-500 py-1 px-2 w-20 rounded-md" onClick={handlesignup}>Signup</button>
                <p>Aldready having an account?<Link to={'/'} className="underline">Login</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Signup