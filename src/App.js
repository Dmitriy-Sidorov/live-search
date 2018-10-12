import React, {Component} from "react";
import "./App.css";


const city = ["Москва", "москвская обл", "Рязань", "ростов", "Тверь", "Казань"];

class App extends Component {
    render() {
        return (
            <Search/>
        );
    }
}

function searchingFor(value) {
    return function (item) {
        if (value.length <= 1) {
            return item.toLowerCase().substring(0, 1) === value.toLowerCase().substring(0, 1);
        } else {
            return item.toLowerCase().includes(value.toLowerCase());
        }
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            elementHidden: true
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({elementHidden: event.target.value === ""});
    };

    render() {
        const {value, elementHidden} = this.state;

        return (
            <div className="search">
                <label htmlFor="search">Поиск города</label>
                <input id="search" type="text" value={value} onChange={this.handleChange}/>
                {!elementHidden && <Autocomplete value={value}/>}
            </div>
        );
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


export default App;
