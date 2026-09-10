function Header(props){
    return(
     <>
         <h1 className="text-3xl font-medium">Hello {props.data.state.user}</h1>
         <p>I help you manage your activities :)</p>
     </>
         
     
    )
}

export default Header