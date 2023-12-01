
import React, { useEffect, useState } from "react";
import "../Css/home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  
  //https://www.omdbapi.com/?i=tt3896198&apikey=2f0fc567&s=${searchTerm}
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
            <h3>{el.Title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;


