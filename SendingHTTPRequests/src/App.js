import React, { useCallback, useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMoviesHandler = useCallback(async () => { //useCallback makes sure that our function is not created again and again
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch("https://react-3afd0-default-rtdb.firebaseio.com/movies.json");
      const data = await response.json();

      const loadedMovies = [];
      for (const key in data){
        loadedMovies.push({
          id:key,
          title:data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      if (!response.ok) {
        throw new Error("Somethig Went Wrong!");
      }
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);
  async function addMovieHandler(movie){
    const response = await fetch("https://react-3afd0-default-rtdb.firebaseio.com/movies.json",{
      method:"POST",
      body:JSON.stringify( movie),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {  //It automatically executes fetchMoviesHandler on Page reload
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <p>No movies to display.</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && (
          <LineWave
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
