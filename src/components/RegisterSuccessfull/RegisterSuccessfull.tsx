import React from 'react'
import "./registersuccessful.css"
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function RegisterSuccessfull() {
  return (
    <>
    <Header />
    <div className="success-container">
        <h2 className='success-title'>Register Successful!</h2>
        <div className="success-buttons-div">
            <Link to="/login" className='success-button-profile'>Go to Login Page</Link>
            <Link to="/productlistpage" className='success-button-products'>Products page</Link>
        </div>

    </div>
    </>
  );
}

export default RegisterSuccessfull