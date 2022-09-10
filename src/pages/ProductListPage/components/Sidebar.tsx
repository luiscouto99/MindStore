// @ts-nocheck
import Filter from './Filter';
import Sort from '../../../components/Sort/Sort';

import styled from "styled-components/macro";

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 200px;
    padding-top: 31px;
    padding-right: 20px;
    padding-left: 20px;
    margin-left: 20px;
    background-color: var(--light-grey);

    @media (max-width: 650px) {
      width: 100%;
      margin: 0 auto;
    }
`;

function Sidebar(props) {
  const { handleSortFetch, handleCategoryFetch, handlePriceFetch, handleRatingFetch } = props;
  return (
    <SideBar>
      <Sort handleSortFetch={handleSortFetch} />
      <Filter handleCategoryFetch={handleCategoryFetch} handlePriceFetch={handlePriceFetch} handleRatingFetch={handleRatingFetch} />
    </SideBar>
  )
}

export default Sidebar;