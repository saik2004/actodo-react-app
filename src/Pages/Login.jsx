import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){
    
    const user = props.user

    const navigate = useNavigate()
    
    const [eusername,seteusername] = useState("")
    const [epassword,setepassword] = useState("")
    const [isregister,setisregister] = useState(true)

    function handleusername(e){
     seteusername(e.target.value)
    }

    function handlepassword(e){
     setepassword(e.target.value)
    }
     
    function handlelogin(){
        console.log(user)

        let userfound = false
        user.forEach((items)=>{
            if(items.username === eusername & items.pass === epassword){
                console.log("login succesfull")
                userfound = true
                navigate('/landing',{state:{user:eusername}})
            }
           
        })

        if(userfound == false){
            console.log("login failed")
            setisregister(false)
        }
    }


    return(
    <div className="bg-black p-10 ">
        <div className="bg-white p-10 border border-black rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi!</h1>
            {isregister? <p>i help you manage your activities after you login :)</p> : <p className="text-red-500">Please Signup if you did'nt</p>}
           

            <div className="flex flex-col gap-2 w-60 my-2">
                <input value={eusername} onChange={handleusername} type="text" placeholder="username" className="border border-black p-2 w-80% rounded-md"/>
                <input value={epassword} onChange={handlepassword} type="text" placeholder="password" className="border border-black p-2 w-80% rounded-md"/>
                <button className="bg-purple-500 py-1 px-2 w-20 rounded-md" onClick={handlelogin}>Login</button>
                <p>Don't have an account? <Link to={'/signup'} className="underline">Signup</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Login