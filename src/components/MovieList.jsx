import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import api from "../utils/api";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../constants";
import { useState } from "react";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };

    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          lazyLoad: true,
          gap: "10px",
        }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px]"
                src={baseImgUrl + movie.poster_path}
                alt="{movie.title}"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
