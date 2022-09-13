import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import { CredentialsLayout } from "../../../components/Layout/Layout";

const SuccessContainer = styled.div`
    /* position: absolute;
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%); */
    background-color: white;
    width: 30%;
    min-width: 300px;
    padding-top: 30px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

const RegisterSuccessfullTitle = styled.h2`
    text-align: center;
    font-family: "Prata", serif;
    font-weight: 300;
    font-size: 25px;
    border-bottom: 0.5px solid #dddddd;
    margin: 0 15%;
    padding-top: 20px;
    padding-bottom: 10px;
`;

const SuccessfullBtnContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const RegisterSuccessfullButtons = styled(Link)`
    background-color: var(--primary-color);
    border: none;
    border-radius: 4px;
    padding: 13px 40px;
    color: white;
    margin-top: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
`;

function RegisterSuccessfull() {
  return (
    <CredentialsLayout>
      <SuccessContainer>
        <RegisterSuccessfullTitle>Register Successful!</RegisterSuccessfullTitle>
        <SuccessfullBtnContainer>
          <RegisterSuccessfullButtons to="/login">Go to Login Page</RegisterSuccessfullButtons>
          <RegisterSuccessfullButtons to="/productlistpage">Products page</RegisterSuccessfullButtons>
        </SuccessfullBtnContainer>
      </SuccessContainer>
    </CredentialsLayout>
  );
}

export default RegisterSuccessfull