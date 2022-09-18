import { useState } from 'react';

import CategoryButton from './CategoryButton';
import PriceButton from './PriceButton';
import RatingButton from './RatingButton';

import arrowRight from '../../../../../assets/arrow-right.png';

import styled from 'styled-components/macro';
import { SidebarButton, SidebarIcon } from '../../../../../components/Layout/Layout';

const FilterContainer = styled.div``;

function Filter({
  handleCategoryFetch,
  handlePriceFetch,
  handleRatingFetch,
}: {
  handleCategoryFetch: () => void;
  handlePriceFetch: () => void;
  handleRatingFetch: () => void;
}) {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  const [isRatingClicked, setIsRatingClicked] = useState(false);
  const [isPriceClicked, setIsPriceClicked] = useState(false);

  const handleCategoryClick = () => {
    setIsCategoryClicked(!isCategoryClicked);
    setIsRatingClicked(false);
    setIsPriceClicked(false);
  };

  const handleRatingClick = () => {
    setIsRatingClicked(!isRatingClicked);
    setIsCategoryClicked(false);
    setIsPriceClicked(false);
  };

  const handlePriceClick = () => {
    setIsPriceClicked(!isPriceClicked);
    setIsCategoryClicked(false);
    setIsRatingClicked(false);
  };

  const handleFilterClick = () => {
    setIsFilterClicked(!isFilterClicked);
    setIsCategoryClicked(false);
    setIsRatingClicked(false);
    setIsPriceClicked(false);
  };

  return (
    <>
      <FilterContainer>
        <SidebarButton onClick={handleFilterClick}>
          Filter by
          <SidebarIcon rotation={isFilterClicked} src={arrowRight} alt="" />
        </SidebarButton>

        {isFilterClicked && (
          <FilterContainer>
            <CategoryButton
              handleCategoryFetch={handleCategoryFetch}
              handleCategoryClick={handleCategoryClick}
              isCategoryClicked={isCategoryClicked}
            />
            <RatingButton
              handleRatingFetch={handleRatingFetch}
              handleRatingClick={handleRatingClick}
              isRatingClicked={isRatingClicked}
            />
            <PriceButton
              handlePriceFetch={handlePriceFetch}
              handlePriceClick={handlePriceClick}
              isPriceClicked={isPriceClicked}
            />
          </FilterContainer>
        )}
      </FilterContainer>
    </>
  );
}

export default Filter;
