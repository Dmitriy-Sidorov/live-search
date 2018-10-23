import React, {Component} from "react";

const city = ["Москва", "москвская обл", "Рязань", "ростов", "растов", "Тверь", "Великий Новгород", "Казань"];

class Autocomplete extends Component {
    state = {
        city: city
    };

    searchingFor = (value) => {
        return (city) => {
            console.log(city);
            return city.toLowerCase().substring(0, value.length) === value.toLowerCase().substring(0, value.length);
        }
    }

    render() {
        const {city} = this.state;
        return (
            <div className="podskazka">
                {city.filter(this.searchingFor(this.props.value)).map((city, index) => (
                    <div key={index}>{city}</div>
                ))}
            </div>
        );
    }
}

export default Autocomplete;
