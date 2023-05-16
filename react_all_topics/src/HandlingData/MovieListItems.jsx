import React from 'react'
const movieItemStyle =(status)=>{
    return {
    backgroundColor:status && "yellow",
    cursor:'pointer'
    }
}
export default function MovieListItems({id,selected,onselectMovie,movieTitle}){
    //console.log(movieTitle,"title____")
  return (
    <div>
      <p style={movieItemStyle(selected)} onClick={()=>onselectMovie && onselectMovie(id)}>{movieTitle}</p>
    </div>
  )
}
