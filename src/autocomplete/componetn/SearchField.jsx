import React from 'react';

const SearchField = (props) => {
    return (
        <input
            className="search-field form-control"
            id="search"
            type="text"
            placeholder="Поиск по списку"
            value={props.value}
            onChange={props.onChange}
        />
    );
};

export default SearchField;
