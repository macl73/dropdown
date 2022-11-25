import React from "react";
import PropTypes from 'prop-types';

function Dropdown(props) {
    const {onChange} = props;

    return (
        <button onClick={onChange} className="btn">
            Выбор элемента
        </button>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func
  };

export default Dropdown;