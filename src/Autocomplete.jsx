import React, {Component} from "react";


const city = ["Москва", "москвская обл", "Рязань", "ростов", "растов", "Тверь", "Великий Новгород", "Казань"];


function searchingFor(value) {
    return function (item) {
        return item.toLowerCase().substring(0, value.length) === value.toLowerCase().substring(0, value.length);
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
