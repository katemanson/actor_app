var React = require('react');

var MovieSelector = React.createClass({

  getInitialState: function(){
    return {
      selectedIndex: -1
    };
  },

  render: function(){
    var options = this.props.movies.map(function(movie, index){
      return (<option value={index} key={index}>{movie.show_title}</option>);
    });
    return (
      <select
      onChange={this.handleChange}>
        {options}
      </select>
    );
  },

  handleChange: function(event){
    var newIndex = parseInt(event.target.value)

    this.setState({
      selectedIndex: newIndex
    });
    var movie = this.props.movies[newIndex];
    this.props.selectMovie(movie);
  }

});

module.exports = MovieSelector;