import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {

  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => {
    return {
      searchTerm: state.cars.searchTerm,
    };
  });

  const handleChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className='car-form panel'>
      <div className='list-header'>
        <h3 className='title is-3'>My Cars</h3>
        <div className='search field is-horizontal'>
          <label className='label'>Search</label>
          <input
            className='input mr-3'
            value={searchTerm}
            onChange={handleChange}
          />
          <button className='button is-link'>Search</button>
        </div>
      </div>
    </div>
  );
}

export default CarSearch;
