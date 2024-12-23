import React from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John eats grapes", release_date: "2021" },
    { id: 2, title: "Grapes of magic", release_date: "2010" },
    { id: 3, title: "Lord of the Grapes", release_date: "2014" },
    { id: 4, title: "Planet of the Grapes", release_date: "1998" },
    { id: 5, title: "What's eating Gilbert Bacon?", release_date: "2011" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
