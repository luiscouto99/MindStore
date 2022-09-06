// @ts-nocheck

import React from "react";
import { useState } from "react";
import "./filter.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowRight from "../../assets/arrow-right.png";
import starBlack from "../../assets/star-grey-darker.png";

function Filter(props) {
	const { handleCategoryFetch, handlePriceFetch, handleRatingFetch } = props;
	const [isFilterClicked, setIsFilterClicked] = useState(false);
	const [isCategoryClicked, setIsCategoryClicked] = useState(false);
	const [isRatingClicked, setIsRatingClicked] = useState(false);
	const [isPriceClicked, setIsPriceClicked] = useState(false);

	function FilterMainButton() {

		function handleCategoryClick() {
			setIsCategoryClicked(!isCategoryClicked);
			setIsRatingClicked(false);
			setIsPriceClicked(false);
			console.log("category");
		}
		function handleRatingClick() {
			setIsRatingClicked(!isRatingClicked);
			setIsCategoryClicked(false);
			setIsPriceClicked(false);
			console.log("rating");
		}
		function handlePriceClick() {
			setIsPriceClicked(!isPriceClicked);
			setIsCategoryClicked(false);
			setIsRatingClicked(false);
			console.log("price");
		}

		if (isFilterClicked) {
			return (
				//form
				<>
					<div className="inner-filter-container">
						<label>
							<button className="category-button" name="filter" onClick={handleCategoryClick} value="category">
								Category
								{isCategoryClicked ?
                        		<img className="arrow-down" src={arrowDown} alt="" /> :
                        		<img className="arrow-right" src={arrowRight} alt="" />
                    			}
							</button>
						</label>
						<CategoryButton />

						<label>
							<button className="rating-button" name="filter" onClick={handleRatingClick} value="rating">
								Rating
								{isRatingClicked ?
                        		<img className="arrow-down" src={arrowDown} alt="" /> :
                        		<img className="arrow-right" src={arrowRight} alt="" />
                    			}
							</button>
						</label>
						<RatingButton />

						<label>
							<button className="price-button" name="filter" onClick={handlePriceClick} value="price">
								Price
								{isPriceClicked ?
                        		<img className="arrow-down" src={arrowDown} alt="" /> :
                        		<img className="arrow-right" src={arrowRight} alt="" />
                    			}
							</button>
						</label>
						<PriceButton />
					</div>
				</>
			);
		} else {
			return;
		}
	} //FilterMainButton
	function handleFilterClick() {
		setIsFilterClicked(!isFilterClicked);
		setIsCategoryClicked(false); //para fechar as opcoes do botao quando abro e fecho o filter(principal)
		setIsRatingClicked(false);
		setIsPriceClicked(false);
		console.log("filter");
	}

	function CategoryButton() {
		function handleCategoryChange(event) {
			const field = event.target.value;
			const link =`/category?category=${field}&pagesize=9&direction=`;
			handleCategoryFetch(link);
			console.log(event.target.value);
		}

		if (isCategoryClicked) {
			return (
				<div>
					<form className="category-form">
						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="women's+clothing" />
							Women’s Clothing
						</label>

						<label className='category-radio-label'>
							<input className='category-radio'  type="radio" name="category" onChange={handleCategoryChange} value="men's+clothing" />
							Men’s Clothing
						</label>

						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="jewelery" />
							Jewellery
						</label>

						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="electronics" />
							Electronics
						</label>
					</form>
				</div>
			);
		} else {
			return;
		}
	}

	function RatingButton() {
		const rating01 = {min: 0, max: 1};
		const rating02 = {min: 1, max: 2};
		const rating03 = {min: 2, max: 3};
		const rating04 = {min: 3, max: 4};
		const rating05 = {min: 4, max: 5};

		function handleRatingChange01(event) {
			const min = rating01.min;
			const max = rating01.max;
			console.log(min, max);
			// const link =`/category?category=${field}&page=1&pagesize=9&direction=`;
			///price?direction=ASC&page=1&pagesize=4&min=20&max=2000
			const link =`/rating?pagesize=9&min=${min}&max=${max}&direction=`;
			handleRatingFetch(link);
			console.log(event.target.value);
		}
		function handleRatingChange02(event) {
			const min = rating02.min;
			const max = rating02.max;
			console.log(min, max);
			// const link =`/category?category=${field}&page=1&pagesize=9&direction=`;
			///rating?direction=ASC&page=1&pagesize=4&min=20&max=2000
			const link =`/rating?pagesize=9&min=${min}&max=${max}&direction=`;
			handleRatingFetch(link);
			console.log(event.target.value);
		}
		function handleRatingChange03(event) {
			const min = rating03.min;
			const max = rating03.max;
			console.log(min, max);
			// const link =`/category?category=${field}&page=1&pagesize=9&direction=`;
			///rating?direction=ASC&page=1&pagesize=4&min=20&max=2000
			const link =`/rating?pagesize=9&min=${min}&max=${max}&direction=`;
			handleRatingFetch(link);
			console.log(event.target.value);
		}
		function handleRatingChange04(event) {
			const min = rating04.min;
			const max = rating04.max;
			console.log(min, max);
			// const link =`/category?category=${field}&page=1&pagesize=9&direction=`;
			///rating?direction=ASC&page=1&pagesize=4&min=20&max=2000
			const link =`/rating?pagesize=9&min=${min}&max=${max}&direction=`;
			handleRatingFetch(link);
			console.log(event.target.value);
		}
		function handleRatingChange05(event) {
			const min = rating05.min;
			const max = rating05.max;
			console.log(min, max);
			// const link =`/category?category=${field}&page=1&pagesize=9&direction=`;
			///rating?direction=ASC&page=1&pagesize=4&min=20&max=2000
			const link =`/rating?pagesize=9&min=${min}&max=${max}&direction=`;
			handleRatingFetch(link);
			console.log(event.target.value);
		}

		if (isRatingClicked) {
			return (
				<div>
					<form className="rating-form">
						<label className='rating-radio-label'>
							{/* <input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 1.1, max: 2.0}" /> */}
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange01} value={rating01} />
							<img src={starBlack} alt="" /> 
						</label>

						<label className='rating-radio-label'>
							{/* <input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 1.1, max: 2.0}" /> */}
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange02} value={rating02} />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>

						<label className='rating-radio-label'>
							{/* <input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 2.1, max: 3.0}" /> */}
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange03} value={rating03} />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>

						<label className='rating-radio-label'>
							{/* <input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 3.1, max: 4.0}" /> */}
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange04} value={rating04} />

							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>

						<label className='rating-radio-label'>
							{/* <input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 4.1, max: 5.0}" /> */}
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange05} value={rating05} />

							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>
					</form>
				</div>
			);
		} else {
			return;
		}
	}

	function PriceButton() {
		const priceObject01 = {min: 0, max: 50};
		const priceObject02 = {min: 51, max: 100};
		const priceObject03 = {min: 101, max: 300};
		const priceObject04 = {min: 301, max: 800};
		const priceObject05 = {min: 801, max: 1200};
		const priceObject06 = {min: 1201, max: 3000};
		const priceObject07 = {min: 3001, max: 5000};

		function handlePriceChange(priceObject) {
			const min = priceObject.min;
			const max = priceObject.max;
			console.log(min, max);
			//   /price?page=1&pagesize=9&min=0&max=5000&direction=ASC
			const link =`/price?pagesize=9&min=${min}&max=${max}&direction=`;
			handlePriceFetch(link);
		}

	
		if (isPriceClicked) {
			return (
				<>
					<form className="price-form">
						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject01)} value={priceObject01} />
							0€ &nbsp; to &nbsp;  50€
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject02)} value={priceObject02} />
							51€ &nbsp; to &nbsp; 100€
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject03)} value={priceObject03} />
							101€ &nbsp; to &nbsp; 300€
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject04)} value={priceObject04} />
							301€ &nbsp; to &nbsp; 800€
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject05)} value={priceObject05} />
							801€ &nbsp; to &nbsp; 1200€
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject06)} value={priceObject06} />
							1201€ &nbsp; to &nbsp; 3000€
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="price" onChange={() => handlePriceChange(priceObject07)} value={priceObject07} />
							3001€ &nbsp; to &nbsp; 5000€
						</label>
					</form>
				</>
			);
		} else {
			return;
		}
	}

	return (
		<>
			<div className="filter-container">
				<button className="filter-button" onClick={handleFilterClick}>
					Filter by
					{isFilterClicked ? <img className="arrow-down" src={arrowDown} alt="" /> : <img className="arrow-right" src={arrowRight} alt="" />}
				</button>
				<FilterMainButton />
				{/* <input type="range" min="0" max="5" value={value} onChange={(e) => setValue(e.target.value)} />
                        {value} */}
			</div>
		</>
	);
}

export default Filter;

/*
    <>
        <button onClick={handleFilterClick}>Filter by</button>
        <FilterMainButton>
            <CategoryButton />
            <RatingButton />
            <PriceButton />
        </FilterMainButton>
    </>
*/
