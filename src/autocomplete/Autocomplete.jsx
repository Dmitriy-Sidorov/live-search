import React, {Component} from 'react';
import SearchField from './componetn/SearchField.jsx';
import DropDownList from './componetn/DropDownList.jsx';

const items = [
    'Москва',
    'москвская обл',
    'Рязань',
    'ростов',
    'растов',
    'Тверь',
    'Великий Новгород',
    'Казань'
];

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueItem: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            valueItem: event.target.value,
        });
    };

    render() {
        const {valueItem} = this.state;
        const dropDownOptions = items.filter((item) => item.toLowerCase().substring(0, valueItem.length) === valueItem.toLowerCase());

        return (
            <div className="autocomplete">
                <SearchField value={valueItem} onChange={this.handleChange}/>
                {valueItem && <DropDownList  dropDownOptions={dropDownOptions}/>}
            </div>
        );
    }
}

export default Autocomplete;
