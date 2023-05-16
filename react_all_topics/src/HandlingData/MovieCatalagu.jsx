import React,{useState} from 'react'
import MovieBannar from './MovieBannar'
import MovieList from './MovieList'

export default function MovieCatalagu({movieData}) {
const [selectMovieId, setSelectMovieId] = useState(movieData[0].id);
const singleMovie = movieData.find(movie=>movie.id === selectMovieId )|| movieData[0];
const {title,year,poster,director,casts,genre} = singleMovie;
console.log('id',singleMovie)
  return (
    <div>
      <div className="float">
      <MovieBannar 
      movieTitle ={title}
      movieYear ={year}
      moviePoster ={poster}
      movieDirector ={director}
      movieCast ={casts}
      movieGener ={genre}
      />
      </div>
      <div className="float">
      <MovieList 
      onSelectMovieId ={setSelectMovieId}
      movieList ={movieData}
      selectMovieId ={selectMovieId}
      />
      </div>
    </div>
  )
}
