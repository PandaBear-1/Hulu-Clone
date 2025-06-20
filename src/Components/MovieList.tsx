import  { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBack,  IoChevronForward } from 'react-icons/io5'

function MovieList(genreId:any) {

    const [movieList, setMovieList] = useState<any>([])
    const [showMoveLeft, setShowMoveLeft] = useState(false)
    const elementRef = useRef(null)

    useEffect(()=>{
        getMovieListByGenreId()
    }, [])

    function getMovieListByGenreId(){
        GlobalApi.getMovieByGenreId(genreId.genreId).then((resp:any)=>{
            setMovieList(resp.data.results )
        })
    }

    function slideRight(element:any){
        element.scrollLeft += 500;
        setShowMoveLeft(true)
    }

    function slideLeft(element:any){
        element.scrollLeft -= 500;
    }



    
  return (
    <div className='flex items-center '>
       {showMoveLeft && <IoChevronBack onClick={()=> slideLeft(elementRef.current)} className='text-[40px] text-white
        bg-black cursor-pointer p-2 rounded-full mb-[120px] mr-[-40px] z-10 ' />}
        <div ref = {elementRef} className='w-full overflow-scroll scroll-smooth overflow-x-auto
        whitespace-nowrap scrollbar-hide mb-8 '>
            {movieList.map((item:any, index:any)=> index <=7 && (
                <MovieCard movie={item}/>
            ))}
        </div>
      < IoChevronForward onClick={()=>slideRight(elementRef.current)} className='text-[40px] text-white bg-black cursor-pointer
       p-2 rounded-full mb-[120px] ml-[-40px] z-10  ' />
    </div>
  )
}

export default MovieList