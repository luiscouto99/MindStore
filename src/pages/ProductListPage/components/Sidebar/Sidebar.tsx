// import React from "react";
import Filter from './Filter/Filter';
import SearchBar from '../Searchbar/SearchBar';
import Sort from './Sort/Sort';

import styled from 'styled-components/macro';
import { ProductListSorting } from '../../../../types/product';

const SideBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 200px;
  margin: 0 40px;
  background-color: var(--light-grey);

  @media (max-width: 650px) {
    position: initial;
    width: 300px;
    margin: 0 auto;
  }
`;

// esta tipagem nao esta correta
const Sidebar = ({
  handleSortFetch,
  handleCategoryFetch,
  handlePriceFetch,
  handleRatingFetch,
  inputSearch,
  handleSearchBar,
}: {
  handleSortFetch: (direction: ProductListSorting) => void;
  handleCategoryFetch: () => void;
  handlePriceFetch: () => void;
  handleRatingFetch: () => void;
  inputSearch: React.MutableRefObject<string>;
  handleSearchBar: () => void;
}): JSX.Element => (
  <SideBar>
    <SearchBar inputSearch={inputSearch} handleSearchBar={handleSearchBar} />
    <Sort handleSortFetch={handleSortFetch} />
    <Filter
      handleCategoryFetch={handleCategoryFetch}
      handlePriceFetch={handlePriceFetch}
      handleRatingFetch={handleRatingFetch}
    />
  </SideBar>
);
export default Sidebar;
