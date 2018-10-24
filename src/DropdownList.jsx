import React, { Component } from "react";

class DropdownList extends Component {
  render() {
    const { city } = this.props;
    return (
      <div className="podskazka">
        {city.filter(this.props.function).map((city, index) => (
          <div key={index}>{city}</div>
        ))}
      </div>
    );
  }
}

export default DropdownList;
