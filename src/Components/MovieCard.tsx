import React from 'react'

function MovieCard(props:any) {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
  return (
    <div className='inline-block m-2 md:m-3 cursor-pointer group'>
        <img src={IMAGE_BASE_URL+props.movie.backdrop_path} 
        className='w-[230px] md:w-[340px] object-cover rounded-2xl group-hover:border-[5px] border-gray-400 
        p-2 transition-all duration-100 ease-in-out' />
        <h2 className='text-gray-400 mt-2 text-[12px]
        md:text-[15px] font-bold '>{props.movie.id%2 ==0 ? 'WATCH MOVIE' : 'START WATCHING'}</h2>
        <h2 className='text-white mt-1 transition-all md:text-[22px] group-hover:font-bold
        '>{props.movie.original_title}</h2>
    </div>
  )
}

export default MovieCard