import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    background-color: var(--primary-color);
    color: white;
    padding: 16px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    width: 220px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .15);
    }
`;