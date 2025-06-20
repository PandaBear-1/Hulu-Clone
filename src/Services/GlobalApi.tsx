import axios from 'axios'

const movieBaseUrl = 'https://api.themoviedb.org/3/movie'
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '	Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjEzMzI0YWEwYjI5NWQ3MjYzZDYxMzA5MGJjN2JkNiIsIm5iZiI6MTc0OTg5OTI3My43NDMsInN1YiI6IjY4NGQ1ODA5NGRiMmVjYWRiZDFiZWNiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6JAMwPyJS-PI63emQnP-t49PK1TYx3I27E0hynrHwc'
    }
  };

  const getPopularMovies =  axios.get(movieBaseUrl + '/popular?language=en-US&page=1' , options)

  export default {
    getPopularMovies
  }