import { Link } from "react-router-dom";
import styled, {css} from "styled-components/macro";

export const MainLayout = styled.main``;

export const LoginLayout = styled(MainLayout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 100px);
    justify-content: center;
`;

export const ButtonLink = styled(Link)`
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


type ButtonProps = {
    noMargin?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background-color: var(--primary-color);
    border: none;
    border-radius: 4px;
    padding: 13px 40px;
    color: white;
    margin-top: 13px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .15);
    }

    ${(props) => props.noMargin && css`
        margin: 0;
    `}
`;