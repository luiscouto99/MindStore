import { useState } from 'react';

import arrowRight from "../../../../../assets/arrow-right.png";

import styled from "styled-components";
import { SidebarButton, SidebarForm, SidebarIcon, SidebarInput, SidebarInputText, SidebarLabel } from "../../../../../components/Layout/Layout";

const SortContainer = styled.div`
    margin-top: 53px;
`;

function Sort({ handleSortFetch }: {handleSortFetch: (value: string) => void}) {
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
                <SidebarButton data-testid="sort-button" onClick={handleClick}>
                    Sort by
                    <SidebarIcon rotation={isClicked} src={arrowRight} alt="" />
                </SidebarButton>

                {
                    choice ? (
                        <SidebarForm data-testid="sort-form">
                            <SidebarLabel htmlFor="ascending" onClick={(event) => setSelected((event.target as HTMLInputElement).value)} onChange={(event) => handleSortFetch((event.target as HTMLInputElement).value)} >
                                <SidebarInput type="radio" id='ascending' name='sort' value="ASC" checked={selected === "ASC"}/>
                                <SidebarInputText>Ascending Order</SidebarInputText>
                            </SidebarLabel>

                            <SidebarLabel data-testid="sort-label-desc" htmlFor="descending" onClick={(event) => setSelected((event.target as HTMLInputElement).value)} onChange={(event) => handleSortFetch((event.target as HTMLInputElement).value)} >
                                <SidebarInput type="radio" id='descending' name='sort' value="DESC" checked={selected === "DESC"} />
                                <SidebarInputText>Descending Order</SidebarInputText>
                            </SidebarLabel>
                        </SidebarForm>
                    ) : (null)
                }
            </SortContainer>
        </>
    )
}

export default Sort;