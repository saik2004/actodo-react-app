function Card(props){
    return(
    <div style={{backgroundColor:props.bgcolor}} className="px-5 py-10 rounded-md text-center flex-grow">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
    )
}

export default Card