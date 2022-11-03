import React from "react";
import Card from "./Card";
import Header from "./Header";
import movies from "../data/movies.json";

export default function Main() {
  const renderData = movies.map((movie) => {
    return (
      <Card
        key={movie.id}
        img={movie.poster_path}
        originalTitle={movie.original_title}
        averageScore={movie.vote_average}
        releaseDate={movie.release_date}
      />
    );
  });

  return (
    <main className="padded">
      <Header />
      <br />
      <div className="flex flex-gap center">{renderData}</div>
    </main>
  );
}
