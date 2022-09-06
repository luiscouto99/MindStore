import React from 'react'
import "./footer.css"

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p className='footer-title'>MindStore</p>
            <p className='footer-rights'>© {year}. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;