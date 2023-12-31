
import React, { useEffect, useState } from "react";
import "../Css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetching API Data
  const fetchData = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2f0fc567&s=${searchTerm}`);
      const result = await response.json();

      if (result.Response === "True") {
        setData(result.Search);
      } else {
        setData([]);
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  // Search Movies by Name Logics
  const handleSearch = () => {
    fetchData(searchMovie);
    setSearchMovie("");
  };

  // Add To Favorites Logics
  const handleAdd = (el) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const checkMovie = favorites.find((fav) => fav.imdbID === el.imdbID);

    if (checkMovie !== undefined) {
      alert('Movie is already in favorites!');
    } else {
      favorites.push(el);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Movie added to favorites!');
    }
  };

  useEffect(() => {
    fetchData("hulk");
  }, []);

  // Sorting Logic Here
  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  };

  const sortData = () => {
    let sortedData = [...data];

    if (sortBy === "year") {
      sortedData = sortedData.sort((a, b) => parseInt(a.Year, 10) - parseInt(b.Year, 10));
    }

    setData(sortedData);
  };

  useEffect(() => {
    sortData();
  }, [sortBy]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          Search
        </button>
      </div>

      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <div className="sort-bar">
        <label>Sort by:</label>
        <select onChange={(e) => handleSortBy(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="year">Year</option>
        </select>
      </div>

      <div className="movie-container">
        {data.map((el, index) => (
          <div key={index} className="card-items">
            <img src={el.Poster} alt={el.Title} />

            <div className="add-view-btn">
              <Link to={`movie/${el.imdbID}`}>
                <button className="view"> View</button>
              </Link>
              <button className="add" onClick={() => handleAdd(el)}>
                Fav
              </button>
            </div>

            <b className="year">Year : {el.Year}</b>
          </div>
        ))}
        {!loading && data.length === 0 && <h1>No results found.</h1>}
      </div>
    </>
  );
};

export default Home;
