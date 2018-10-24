import React, { Component } from "react";

class SearchField extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Поиск города</label>
        <input
          id="search"
          type="text"
          value={this.props.value}
          onChange={this.props.function}
        />
      </div>
    );
  }
}

export default SearchField;
