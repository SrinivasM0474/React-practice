import React from 'react'
import MovieListItems from './MovieListItems'
export default function MovieList({onSelectMovieId,movieList,selectMovieId}) {
  console.log(movieList,"MovieList")
  return (
    <div>
      {movieList.map(item=>{
        return <MovieListItems key ={item.id}
        id={item.id}
        selected ={item.id === selectMovieId}
        onselectMovie ={onSelectMovieId}
        movieTitle={item.title}
        />
      })}
    </div>
  )
}
