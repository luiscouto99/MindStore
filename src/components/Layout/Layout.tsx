import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const MainLayout = styled.main``;

export const CredentialsLayout = styled(MainLayout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 100px);
    justify-content: center;
`;

type CredentialsContainerProps = {
    isSuccessfull: boolean;
}
export const CredentialsContainer = styled.section<CredentialsContainerProps>`
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 300px;
    background-color: white;
    padding: 20px;

    ${(props) =>
        props.isSuccessfull && css`
            display: flex;
            align-items: center;
            padding-bottom: 30px;
        `
    }
`;

export const CredentialsTitle = styled.h2`
    font-family: "Prata", serif;
    font-weight: normal;
    text-align: center;
    border-bottom: 0.5px solid #dddddd;
    margin: 0 15%;
`;

export const CredentialsForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 15%;
    gap: 20px;
`;

export const CredentialsLabel = styled.label`
    width: 100%;
`;

export const CredentialsInput = styled.input`
    background-color: var(--light-grey);
    border: none;
    border-radius: 4px;
    padding: 13px 5px 13px 10px;
    width: 94.5%;
    font-family: "Roboto", sansserif;
    transition: ease-in-out 0.2s;

    &::placeholder {
        color:rgb(163, 163, 163);
    }

    &:focus {
        outline: none;
        box-shadow: -1px 6px 10px 0 rgba(119, 119, 119, 0.15);
    }
`;

export const CredentialsFooterText = styled.p`
    text-align: center;
    font-size: 14px;
    margin: 0;

    & a {
        color: var(--primary-color);
    }
`;

type ButtonLinkProps = {
    marginLeft?: boolean;
}
export const ButtonLink = styled(Link)<ButtonLinkProps>`
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

    ${(props) => props.marginLeft && css`
        margin-left: 32px;
    `}
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

type SidebarButtonProps = {
    marginLeft?: boolean;
}
export const SidebarButton = styled.button<SidebarButtonProps>`
    width: 100%;
    cursor: pointer;
    border: none;
    font-size: 15px;
    background-color: var(--light-grey);
    border-bottom: 1px solid rgb(212, 212, 212);
    margin-bottom: 30px;
    padding-bottom: 5px;
    padding-left: 0;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props: SidebarButtonProps) => props.marginLeft && css`
        margin-left: 20px;
        width: calc(100% - 20px);
    `}
`;

type SidebarIconProps = {
    rotation?: boolean;
}
export const SidebarIcon = styled.img<SidebarIconProps>`
    height: 9px;
    transition: 0.1s ease-in-out;

    ${(props: SidebarIconProps) => props.rotation && css`
        transform: rotate(90deg);
    `}
`;

export const SidebarForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 40px;
`;

type SidebarLabelProps = {
    stars?: boolean;
}
export const SidebarLabel = styled.label<SidebarLabelProps>`
    margin: 10px;

    ${(props) => props.stars && css`
        display: flex;
        align-items: center;
    `}
`;

export const SidebarInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border: 1px solid black;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    cursor: pointer;

    &:checked {
        background-color: black;
    }
`;

export const SidebarInputText = styled.span`
    margin-left: 11px;
    font-size: 14px;
    padding: 0 4px;
    cursor: pointer;
`;

export const SidebarInputImg = styled.img`
    padding: 0 2px;
    cursor: pointer;

    &:first-of-type {
        margin-left: 11px;
    }
`;