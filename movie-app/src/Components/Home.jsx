
import React, { useEffect, useState } from "react";
import "../Css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const fetchData = async (searchTerm) => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2f0fc567&s=${searchTerm}`);
    const result = await response.json();
    setData(result.Search);
    console.log("data", result.Search);
  };

  const handleSearch = () => {
    fetchData(searchMovie);
    setSearchMovie("");
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

                  <button className="add" >Fav</button>

               </div>
            
        
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;


