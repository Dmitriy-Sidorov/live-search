import React, {Component} from "react";


const city = ["Москва", "москвская обл", "Рязань", "ростов", "Тверь", "Казань"];


function searchingFor(value) {
    return function (item) {
        if (value.length <= 1) {
            return item.toLowerCase().substring(0, 1) === value.toLowerCase().substring(0, 1);
        } else {
            return item.toLowerCase().includes(value.toLowerCase());
        }
    }
}

class Autocomplete extends Component {
    state = {
        city: city
    };

    render() {
        const {city} = this.state;
        return (
            <div className="podskazka">
                {city.filter(searchingFor(this.props.value)).map((city, index) => (
                    <div key={index}>{city}</div>
                ))}
            </div>
        );
    }
}

export default Autocomplete;
