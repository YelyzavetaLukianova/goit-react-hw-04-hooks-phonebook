import React from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  return (
    <div>
      <label htmlFor="filter">Filter </label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={props.filter}
        onChange={props.handleChange}
      />
    </div>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func,
  filter: PropTypes.func,
};

export default Filter;
