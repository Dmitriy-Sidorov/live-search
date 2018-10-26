import React from 'react';

const SearchField = (props) => {
    return (
        <div className="searchfield">
            <input
                id="search"
                type="text"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default SearchField;
