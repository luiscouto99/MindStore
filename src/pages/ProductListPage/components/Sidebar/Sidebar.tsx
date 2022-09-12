// @ts-nocheck
import Filter from './Filter/Filter';
import SearchBar from "../SearchBar";
import Sort from './Sort/Sort';

import styled from "styled-components/macro";

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 200px;
    margin: 0 40px;
    background-color: var(--light-grey);

    @media (max-width: 650px) {
      width: 100%;
      margin: 0 auto;
    }
`;

function Sidebar({ handleSortFetch, handleCategoryFetch, handlePriceFetch, handleRatingFetch, inputSearch, handleSearchBar }) {
  return (
    <SideBar>
      <SearchBar inputSearch={inputSearch} handleSearchBar={handleSearchBar} />
      <Sort handleSortFetch={handleSortFetch} />
      <Filter handleCategoryFetch={handleCategoryFetch} handlePriceFetch={handlePriceFetch} handleRatingFetch={handleRatingFetch} />
    </SideBar>
  )
}

export default Sidebar;