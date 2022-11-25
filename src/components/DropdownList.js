import React from "react";
import PropTypes from 'prop-types';

function DropdownList(props) {
    const {items} = props;
    const {active} = props;
    const {activateItem} = props;

    return (
        <ul onClick={activateItem} className="dropdown">
            {items.map((el, index) => {
                return <li  className={(el === active ? "active" : "")} key={index}><a href="#">{el}</a></li>
            })}
        </ul>
    );
};

DropdownList.propTypes = {
    activateItem: PropTypes.func,
    active: PropTypes.string,
    items: PropTypes.array
  };

export default DropdownList;