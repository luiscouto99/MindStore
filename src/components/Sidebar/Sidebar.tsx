// @ts-nocheck

import React from 'react'
import "./sidebar.css"
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';

function Sidebar(props) {
  const { handleSortFetch, handleCategoryFetch, handlePriceFetch, handleRatingFetch } = props;

  return (
    <div className='sidebar'>
      <Sort handleSortFetch={handleSortFetch} />
      <Filter handleCategoryFetch={handleCategoryFetch} handlePriceFetch={handlePriceFetch} handleRatingFetch={handleRatingFetch} />
    </div>
  )
}

export default Sidebar;