  import './card.css'
  
  const Card=({userId,id,title,removecard})=>
    {
        return(
            <div className="card">
                     <h2>{title}</h2>
                     <h3>{userId}</h3>
                     <button onClick={()=> removecard(id)} > remove this card</button>
            </div>
        )

    }

     export default Card;