import React from "react";

export default function Card({
  id = "Not found",
  img = "No image",
  originalTitle = "Not found",
  averageScore = "Not found",
  releaseDate = "Not found",
}) {
  return (
    <article className="flex flex-column between border-sm-primary box-shadow-solid-hover padded col-quarter text-center back-quaternary">
      <h3>{originalTitle}</h3>
      <br />
      <div style={{ maxHeight: "70vh" }} className="over-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w300${img}`}
          className="col-full cover"
          alt={originalTitle}
        />
      </div>
      <br />
      <p>
        <strong>Release date: </strong>
        {releaseDate}
      </p>
      <small>
        <strong>Average score: </strong>
        {averageScore}
      </small>
    </article>
  );
}
