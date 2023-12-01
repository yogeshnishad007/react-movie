
import React, { useEffect, useState } from "react";
import "../Css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  // Fetching API Data
  const fetchData = async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2f0fc567&s=${searchTerm}`);
    const result = await response.json();
    setData(result.Search);
    console.log("data", result.Search);
  };


  // Search Movies by Name Logics

  
  const handleSearch = () => {
    fetchData(searchMovie);
    setSearchMovie("");
  };


  // Add To Favorites Logics

  const handleAdd = (el) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      console.log(favorites)

    const checkMovie = favorites.find((fav) => fav.imdbID === el.imdbID);
    console.log("check", checkMovie);
  
    if (checkMovie!==undefined) {
      alert('Movie is already in favorites!');
      
    } else {
  
      favorites.push(el);
      localStorage.setItem('favorites', JSON.stringify(favorites))

      alert('Movie added to favorites!');

    }
  };
  


  useEffect(() => {
    
    fetchData("hulk");
  }, []); 




  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>


      <div className="movie-container">
        {data.map((el, index) => (
          <div key={index} className="card-items">
            <img src={el.Poster} alt={el.Title} />

               <div className="add-view-btn">
               <Link to={`movie/${el.imdbID}`}><button className="view"> View</button>  </Link> 

                  <button className="add" onClick={()=>handleAdd(el)} >Fav</button>

               </div>
            
        
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;


