var React = require('react');

var MovieDetail = function(props) {

  if (!props.movie) {
    return (
      <h3>No Movie Selected</h3>
    )
  }

  return (
    <div className="movie">
      <h3>Title: {props.movie.show_title}</h3>
      <h4>Rating: {props.movie.rating}</h4>
      <img src={props.movie.poster} width="250px" />
    </div> 
  );
};

module.exports = MovieDetail; 