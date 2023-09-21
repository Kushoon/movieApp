import React from "react";
import "../App.css";

const MovieComponent = (props) => {
  const { Title, Type, Year, Poster } = props.movie;

  return (
    <div className="movie-item">
      <img
        src={Poster !== "N/A" ? Poster : "https://picsum.photos/400"}
        placeholder={Title}
        className="img-div"
      />
      <div className="overlay">{Title}</div>
    </div>
  );
};

export default MovieComponent;
