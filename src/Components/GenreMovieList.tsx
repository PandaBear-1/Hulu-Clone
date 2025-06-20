import React from 'react'
import GenresList from '../Constant/GenresList'
import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div className='mt-20 p-5 px-10 md:p-20 '>
        {GenresList.genre.map((item:any, index)=> index <= 4 &&(
            <div>
                <h2 className='text-white text-[23px] font-bold ml-3'>{item.name}
                    <span className='font-normal text-[16px] cursor-pointer text-gray-400 float-right
                    flex items-center'>View All 
                        <IoChevronForwardSharp className='text-white ml-1'/> </span>
                </h2>

                <MovieList genreId ={item.id} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList