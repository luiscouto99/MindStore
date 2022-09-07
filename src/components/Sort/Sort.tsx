// @ts-nocheck
import { useState } from 'react';

import arrowRight from "../../assets/arrow-right.png";

import styled, { css } from "styled-components";

const SortContainer = styled.div`
    margin-top: 42px;
    margin-bottom: 40px;
`;

const SortButton = styled.button`
    width: 100%;
    cursor: pointer;
    border: none;
    font-size: 15px;
    background-color: var(--light-grey);
    border-bottom: 1px solid rgb(212, 212, 212);
    margin-bottom: 30px;
    text-align: left;
    padding-bottom: 5px;
    padding-left: 0;
    font-weight: 500;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

type SortIconProps = {
    rotation?: boolean;
}
const SortIcon = styled.img<SortIconProps>`
    height: 9px;
    transition: 0.1s ease-in-out;

    ${(props: SortIconProps) =>
        props.rotation &&
        css`
            transform: rotate(90deg);
        `
    }
`;

const SortForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const FormLabel = styled.label`
    margin: 10px;
`;

const FormInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  
    border: 1px solid black;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    cursor: pointer;

    &:checked {
        background-color: black;
    }
`;

const FormInputText = styled.span`
    margin-left: 11px;
    font-size: 14px;
    padding: 0 4px;
    cursor: pointer;
`;



function Sort(props) {
    const { handleSortFetch } = props;
    const [choice, setChoice] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState("ASC");

    function handleClick() {
        setIsClicked(!isClicked);
        setChoice(!choice);
    }

    return (
        <>
            <SortContainer>
                <SortButton onClick={handleClick}>
                    Sort by
                    <SortIcon rotation={isClicked} src={arrowRight} alt="" />
                </SortButton>

                {
                    choice ? (
                        <SortForm>
                            <FormLabel htmlFor="ascending" onClick={(event) => setSelected(event.target.value)} onChange={(event) => handleSortFetch(event.target.value)}>
                                <FormInput type="radio" id='ascending' name='sort' value="ASC" checked={selected === "ASC"}/>
                                <FormInputText>Ascending Order</FormInputText>
                            </FormLabel>

                            <FormLabel htmlFor="descending" onClick={(event) => setSelected(event.target.value)} onChange={(event) => handleSortFetch(event.target.value)}>
                                <FormInput type="radio" id='descending' name='sort' value="DESC" checked={selected === "DESC"} />
                                <FormInputText>Descending Order</FormInputText>
                            </FormLabel>
                        </SortForm>
                    ) : (null)
                }
            </SortContainer>
        </>
    )
}

export default Sort;