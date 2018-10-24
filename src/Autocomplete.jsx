import React, { Component } from "react";
import SearchField from "./SearchField.jsx";
import DropdownList from "./DropdownList.jsx";

const cities = [
  "Москва",
  "москвская обл",
  "Рязань",
  "ростов",
  "растов",
  "Тверь",
  "Великий Новгород",
  "Казань"
];
class SearchFild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      elementShow: false
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      elementShow: event.target.value !== ""
    });
  };

  render() {
    const { value, elementShow } = this.state;
    const dropdownOptions = cities.filter((oneCity) => oneCity.toLowerCase().substring(0, value.length) === value.toLowerCase());

    return (
      <div className="search">
        <SearchField value={value} function={this.handleChange} />
        {elementShow && <DropdownList value={value} dropdownOptions={dropdownOptions} />}
      </div>
    );
  }
}

export default SearchFild;
