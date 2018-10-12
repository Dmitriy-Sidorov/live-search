import React, {Component} from "react";
import Autocomplete from './Autocomplete';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            elementShow: false
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({elementShow: event.target.value !== ""});
    };

    render() {
        const {value, elementShow} = this.state;

        return (
            <div className="search">
                <label htmlFor="search">Поиск города</label>
                <input id="search" type="text" value={value} onChange={this.handleChange}/>
                {elementShow && <Autocomplete value={value}/>}
            </div>
        );
    }
}

export default Search;
