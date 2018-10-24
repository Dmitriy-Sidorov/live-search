import React, { Component } from "react";
import SearchField from "./SearchField.jsx";
import DropdownList from "./DropdownList.jsx";

const city = [
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
      city: city,
      value: "",
      elementShow: false
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      elementShow: event.target.value !== ""
    });
  };

  searchingFor = value => {
    return city => {
      return (
        city.toLowerCase().substring(0, value.length) === value.toLowerCase()
      );
    };
  };

  render() {
    const { city, value, elementShow } = this.state;

    return (
      <div className="search">
        <SearchField value={value} function={this.handleChange} />
        {elementShow && <DropdownList value={value} city={city} function={this.searchingFor(value)} />}
      </div>
    );
  }
}

export default SearchFild;
