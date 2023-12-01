
import React, { useState, useEffect } from 'react';
import "../Css/favorites.css"

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFav);
  }, []);


  const handleRemove = (ID) => {
   
    const storedFav = JSON.parse(localStorage.getItem('favorites')) || [];

    const updatedFavorites = storedFav.filter((el) => el.imdbID !== ID);

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <div className="favorites-container">
        {favorites.map((el, index) => (

          <div key={index} className="favorite-item">

            <img src={el.Poster} alt={el.Title} />

            <h3>{el.Title}</h3>

            <button onClick={() => handleRemove(el.imdbID)}>

              Remove
            </button>

          </div>

        ))}
        
      </div>
    </>
  );
};

export default Favorites;
