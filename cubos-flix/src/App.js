import './App.css';
import NavSearch from './components/NavSearch';
import MovieCard from './components/Movies';
import Cart from './components/Cart';
import TopMovies from './components/TopMovies';
import { useEffect, useState } from 'react';

function App() {

  const[movies, setMovies] = useState([]);
  const[cartFilled, setCartFilled] = useState([]);
  const[displayMovie, setDisplayMovie] = useState([]);
  const[filterMovie, setFilterMovie] = useState("");

  useEffect(()=>{
    handlePopulateMovies();
  }, []);

  async function handlePopulateMovies(){
    const response = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR',{
      method:'GET',
    });

    const data = await response.json();
    const formattedMovies = [];

    for(const movie of data.results){
      formattedMovies.push({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        price: movie.price
      })
    }
    
    setMovies(formattedMovies);
    setDisplayMovie(formattedMovies);
  }


  function handleAddMovieCart(movieID){
    
    const localMovies = [...movies];
    
    const localCartMovies = [...cartFilled];

    const movieIndex = localMovies.findIndex(movie=> movie.id === movieID);

    const {id, title, poster_path, price} = localMovies[movieIndex];

    const cartIndex = localCartMovies.findIndex(movie => movie.id === movieID);

    if(cartIndex >= 0){
      localCartMovies[cartIndex].amount += 1;
      setCartFilled(localCartMovies);
    }else{
      const movieCart = {
        id,
        title,
        poster_path,
        price,
        amount: 1
      }
      setCartFilled([...cartFilled, movieCart]);
    }

  }

  function handleFilterMovie(){

   if(filterMovie !== ""){
    const localMovies = [...movies];
    const filteredMovies = localMovies.filter(movie => movie.title.toLowerCase().includes(filterMovie.toLowerCase()));
    filteredMovies.length>0 ? setDisplayMovie(filteredMovies): setDisplayMovie(movies);
   }else{
    setDisplayMovie(movies);
   }
   

   
  }


  return (
    <div className="app">
      <header><NavSearch setFilterMovie={setFilterMovie} handleFilterMovie={handleFilterMovie} /></header>
      <div className="container"> 
        <TopMovies movies={movies} handleAddMovieCart={handleAddMovieCart}/>
        <h1>Filmes</h1>
        <MovieCard movies={displayMovie} handleAddMovieCart={handleAddMovieCart}/>
      </div>
      <div>
        <Cart cartFilled={cartFilled}/>
      </div>
        
      </div>    
  );
}

export default App;
