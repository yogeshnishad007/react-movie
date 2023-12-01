import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Css/singlepage.css"

const SinglePage = () => {
  const { Id } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${Id}&apikey=2f0fc567`);
        const data = await res.json();
        console.log("data",data)
        setMovies(data);
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    };

    fetchMovies();
  }, [Id]);

  if (!movies) {
    return <h1 className='loader'>Loading...</h1>;
  }

  return (
    <>

    <div className='single-movie'>
           <div>
             <img src={movies.Poster} alt={movies.Title}/>
           </div>
        

        <div>
            <h1>{movies.Title}</h1>

            <h2>{movies.Genre}</h2>

            <h3>Released : {movies.Released}</h3>

            <h3>Rating : {movies.imdbRating}</h3>
        </div>
       

    </div>
     
 
    </>
  );
};

export default SinglePage;
