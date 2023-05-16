import React from 'react'

export default function MovieBannar({movieTitle,movieYear,moviePoster,movieDirector,movieCast,movieGener}) {
  return (
    <div>
      <div>
        <img src={moviePoster} />
      </div>
      <h2>{movieTitle}({movieYear})</h2>
      <p>Director:{movieDirector}</p>
      <p>Cast:{movieCast}</p>
      <p>Gener:{movieGener}</p>
    </div>
  )
}
