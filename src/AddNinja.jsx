import React, { Component } from "react";

export default class AddNinja extends Component {
  state = {
    id: null,
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);

    // e.target.value = "";
  };

  render() {
    return (
      <React.Fragment>
        <form className="mx-auto container jumbotron" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control mb-2 "
            id="name"
            onChange={this.handleChange}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            className="form-control mb-2"
            id="age"
            onChange={this.handleChange}
          />
          <label htmlFor="belt">Belt: </label>
          <input
            type="text"
            className="form-control mb-2"
            id="belt"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary mb-5">
            Add Ninja
          </button>
        </form>
      </React.Fragment>
    );
  }
}
