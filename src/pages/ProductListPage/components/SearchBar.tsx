import styled from "styled-components/macro";

import searchBar from "../../../assets/search-bar.png";

const SearchBarLabel = styled.label`
position: relative;
margin: 30px 0;
width: 300px;

@media (max-width: 650px) {
    margin: 0 auto;
}
`;

const SearchBarInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(149, 149, 149);
    background-color: var(--light-grey);
    color: gray;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;

    &:focus {
        outline: none;
    }
`;

const SearchBarIcon = styled.img`
    position: absolute;
    right: 0;
    width: 15px;
    height: 15px;
`;


export const SearchBar = ({ inputSearch, handleSearchBar }: { inputSearch: React.MutableRefObject<string>, handleSearchBar: () => Promise<void> }) =>
    <SearchBarLabel>
        {/* @ts-ignore-next-line */}
        <SearchBarInput type="text" placeholder="Search" ref={inputSearch} onChange={handleSearchBar} />
        <SearchBarIcon src={searchBar} alt="search bar icon" />
    </SearchBarLabel>