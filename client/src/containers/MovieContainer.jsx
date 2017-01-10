var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');

var MovieContainer = React.createClass({

  getInitialState: function() {
    return {
      movies: [],
      focusMovie: undefined
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    if (!nextProps.actor.firstName && !nextProps.actor.lastName) {
      return false;
    };
    return true;
  },

  componentDidUpdate: function() {
    var actor = this.props.actor.firstName + "%20" + this.props.actor.lastName;
    var url = "http://netflixroulette.net/api/api.php?actor=" + actor;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({
        movies: data,
        focusMovie: data[0]
      })
    }.bind(this);
    request.send(null);
  },

  render: function() {
    return (
      <div className="movie-container">
        <h1>{this.props.actor.firstName} {this.props.actor.lastName}</h1>
        <MovieSelector 
          movies={this.state.movies}
          selectMovie={this.setFocusMovie}
        />
        <MovieDetail movie={this.state.focusMovie}/>
      </div>
    )
  },

  setFocusMovie: function(movie){
    this.setState({
      focusMovie: movie
    });
  }

});

module.exports = MovieContainer;