import React from "react";
import Hero from "../components/Hero";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPopular } from "../redux/action/movieAction";
import { getGenres } from "../redux/action/genreAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default MainPage;
