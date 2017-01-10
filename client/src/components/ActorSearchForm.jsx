var React = require('react');

var ActorSearchForm = React.createClass({

  getInitialState: function(){
    return {
      firstName: "",
      lastName: ""
    };
  },

  handleFirstNameChange: function(event){
    this.setState({
      firstName: event.target.value
    });
  },

  handleLastNameChange: function(event){
    this.setState({
      lastName: event.target.value
    });
  },

  handleSubmit: function(event){
    event.preventDefault();
    var firstName = this.state.firstName.trim();
    var lastName = this.state.lastName.trim();

    if (!firstName && !lastName){
      return;
    }
    var actor = {firstName: firstName, lastName: lastName};
    this.props.getActor(actor);
    this.setState({
      firstName: "",
      lastName: ""
    })
  },

  render: function(){
    return (
      <form className="actor-form" onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        placeholder="Actor first name" 
        value={this.state.firstName}
        onChange={this.handleFirstNameChange}
        />
        <input 
        type="text" 
        placeholder="Actor last name" 
        value={this.state.lastName}
        onChange={this.handleLastNameChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }

});

module.exports = ActorSearchForm;