import React, { Component } from "react";

export default class OrderList extends Component {
  state = {
    nameList: this.props.listNames,
    newName: ""
  };

  changeNewName = e => {
    this.setState({ newName: e.target.value });
  };

  render() {
    const rows = this.state.nameList.map((row, index) => (
      <li key={index}>
        <p>{row}</p>
      </li>
    ));
    return (
      <div>
        <input
          type="text"
          value={this.state.newName}
          onChange={e => this.changeNewName(e)}
        />
        <button onClick={() => this.addNameToList()}>Add</button>
        <ul>{rows}</ul>
      </div>
    );
  }

  addNameToList() {
    let names = this.state.nameList;
    names.push(this.state.newName);
    this.setState({ nameList: names });
  }
}
