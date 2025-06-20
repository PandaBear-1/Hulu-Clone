import { useState, useEffect} from 'react'
import GlobalApi from '../Services/GlobalApi'

function Hero() {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
    const [movieList, setMovieList] = useState<any>([])
    useEffect(()=>{
        getPopularMovies()
    }, [])

    function getPopularMovies(){
   GlobalApi.getPopularMovies.then((resp:any)=> {
    const result = resp.data.results
    console.log(result)
    setMovieList(result[0])
    })
    }
  return (
    <div>
        <img src={IMAGE_BASE_URL+movieList.backdrop_path} width={1920} height={1080} className='
        h-[85vh] object-cover '/>
    </div>
  )
}

export default Hero