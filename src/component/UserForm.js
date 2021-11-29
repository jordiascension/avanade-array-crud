import React, { Component } from "react";
import "../App.css";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { addUser, updateUser } from "../store/actions/usersAction"

class UserForm extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      user: {
        name : "",
        surname: "", 
        age: 0,
        id: props.match.params.id,
      },
      redirectToDefault: false
    }
  }

  handleNameChange = (event) => {
    this.setState({ 
      user : { ...this.state.user, 
                  name: event.target.value}
    });
  }

  handleSurnameChange = (event) => {
    this.setState({ 
      user : { ...this.state.user, 
                  surname: event.target.value}
    });
  }

  handleAgeChange = (event) => {
    this.setState({ 
      user : { ...this.state.user, 
                  age: event.target.value}
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.user.id === undefined) 
      this.props.addUser(this.state.user);
    else
      this.props.updateUser(this.state.user);

    this.setState({redirectToDefault: true})
  }

  componentDidMount = () => {
    if (this.props.user)
      this.setState({ user: this.props.user })
  }


  render() {
    if (this.state.redirectToDefault) {
      return <Redirect to="/" />;
    }

    const style = {
      margin: '10px'
    };

    return (
          <div>
          <form onSubmit={this.handleSubmit}>
          <div style={style}><label>Name</label></div>
            <div style={style}>
              <input 
              type="text"
              name="name" 
              value={this.state.user.name}
              onChange={this.handleNameChange}></input> 
            </div>
            <div style={style}><label>Surname</label></div>
            <div style={style}>
              <input
              type="text" 
              name="surname" 
              value={this.state.user.surname}
              onChange={this.handleSurnameChange}></input> 
            </div>
            <div style={style}><label>Age</label></div>
            <div style={style}>
              <input
              type="text" 
              name="age" 
              value={this.state.user.age}
              onChange={this.handleAgeChange}></input> 
            </div>
            <div style={style}>
             <input type="submit" value="Save User" />
            </div>
            </form>
          </div>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    users: state,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addUser: (user) => dispatch(addUser(user)),
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);

