var React = require('react');
var ActorSearchForm = require('../components/ActorSearchForm');
var MovieContainer = require('./MovieContainer');

var ActorContainer = React.createClass({

  getInitialState: function() {
    return {
      actor: {firstName: "Bruce", lastName: "Willis"}
    };
  },

  render: function() {
    return (
      <div className="actor-container">
        <ActorSearchForm getActor={this.setFocusActor}/>
        <MovieContainer actor={this.state.actor}/>
      </div>
    )
  },

  setFocusActor: function(actor){
    this.setState({
      actor: actor
    });
  }

});

module.exports = ActorContainer;