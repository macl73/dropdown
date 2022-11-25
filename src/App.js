import React, {useState} from "react";
import './main.css';
import Dropdown from "./components/Dropdown.js";
import DropdownList from "./components/DropdownList";
import PropTypes from 'prop-types';

function App() {

  const items = ["Элемент1", "Элемент2", "Элемент3", "Элемент4", "Элемент5"];
  const [state, setState] = useState(false);
  const [active, setActive] = useState(items[0]);

  function handleClick() {
    setState(!state);
  };

  function activate(e) {
    let activeLi = e.target.textContent;
    setActive(activeLi);
  };

  function openDropdownList(state) {
    if (state === true) {
      return "dropdown-wrapper open"
    } else {
      return "dropdown-wrapper"
    };
  };

  return (
    <div className="container">
      <div className={openDropdownList(state)}>
        <Dropdown
          onChange={(state) => handleClick(state)}
          state={state} />
        <DropdownList
          items={items}
          activateItem={(active) => activate(active)}
          active={active} />
      </div>
    </div>
  );
};

App.propTypes = {
  onChange: PropTypes.func,
  activateItem: PropTypes.func,
  state: PropTypes.string,
  active: PropTypes.string,
  items: PropTypes.array
};

export default App;
