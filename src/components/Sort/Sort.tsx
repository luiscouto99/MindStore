// @ts-nocheck

import React, { useState } from 'react';
import arrowDown from "../../assets/arrow-down.png";
import arrowRight from "../../assets/arrow-right.png";
import "./sort.css";

function Sort(props) {
    const { handleSortFetch } = props;
    const [choice, setChoice] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    function handleChange(e) {
        const direction = e.target.value;
        handleSortFetch(direction);
    }

    function handleClick() {
        setIsClicked(!isClicked);
        setChoice(!choice);
    }

    return (
        <>
            <div className='sort-container'>
                <button className="sort-button" onClick={handleClick}>
                    Sort by
                    {isClicked ?
                        <img className="arrow-down" src={arrowDown} alt="" /> :
                        <img className="arrow-right" src={arrowRight} alt="" />
                    }
                </button>

                {
                    choice ? (
                        <div>
                            <form className='sort-form'>
                                <label className='sort-radio-label' htmlFor="ascending">
                                    <input className='sort-radio' id='ascending' type="radio" name='sort' onChange={handleChange} value="ASC" />
                                    Ascending Order
                                </label>

                                <label className='sort-radio-label' htmlFor="descending">
                                    <input className='sort-radio' id='descending' type="radio" name='sort' onChange={handleChange} value="DESC" />
                                    Descending Order
                                </label>
                            </form>
                        </div>
                    ) : (null)
                }
            </div>
        </>
    )
}

export default Sort;