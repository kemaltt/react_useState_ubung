import data from "../data";
import { useState } from "react";

const Movie = () => {
  const [sortData, setSortData] = useState([data]);
  const sortAscending = () => {
    setSortData([...data.sort((a, b) => a.year - b.year)]);
  };

  const sortDescending = () => {
    setSortData([...data.sort((a, b) => b.year - a.year)]);
  };
  const sortBestRated = () => {
    setSortData([...data.sort((a, b) => b.rate - a.rate)]);
  };

  const sortAtoZ = () => {
    setSortData([...data.sort((a, b) => a.title.localeCompare(b.title))]);
  };
  const sortZtoA = () => {
    setSortData([...data.sort((a, b) => b.title.localeCompare(a.title))]);
  };

  return (
    <div className="movie_section">
      <h4>lev3_1: Movie Database - sortierbar</h4>
      <div className="btn_container">
        <button onClick={sortAscending}>Sort by Date Ascending</button>
        <button onClick={sortDescending}>Sort by Date Descending</button>
        <button onClick={sortBestRated}>Best Rate</button>
        <button onClick={sortAtoZ}>A-Z</button>
        <button onClick={sortZtoA}>Z-A</button>
      </div>
      <div className="movie_container">
        {data.map((el, i) => (
          <div className="movie_item" key={i}>
            <h5> {el.title} </h5>
            <p> {el.year} </p>
            <p>{el.director} </p>
            <p>{el.duration} </p>
            <p>{el.rate}</p>
            <p>
              {el.genre.map((el) => (
                <p>{el}</p>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
