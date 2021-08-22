import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddNinja from "./AddNinja";
import Ninjas from "./Ninjas";

export default class App extends Component {
  state = {
    ninjas: [
      { name: "dina", age: 28, belt: "black", id: 1 },
      { name: "belal", age: 26, belt: "pink", id: 2 },
      { name: "salma", age: 24, belt: "green", id: 3 },
      { name: "nada", age: 19, belt: "black", id: 4 },
      { name: "ayman", age: 15, belt: "black", id: 5 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.floor(Math.random() * 20);
    let ninjasNew = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: ninjasNew,
    });
  };

  deleteNinja = (id) => {
    let ninjasRemained = this.state.ninjas.filter((ninja) => ninja.id !== id);

    this.setState({
      ninjas: ninjasRemained,
    });
  };

  render() {
    return (
      <div>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />

        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}
