import React from 'react';
export default function Navbar()
{
    return (
        <nav className="Nav-bar">
           <label className="logo"> Mass Mailer <i className="fa-solid fa-envelope"></i></label>
           <label htmlFor="check" className='Checkbtn'><i className="fa-sharp fa-solid fa-bars"></i></label>
            <ul>
                <li><a href="/ "><i className="fa-solid fa-house-chimney"></i></a></li>
                <li><a href="https://www.linkedin.com/in/shubham-sharma-49b54b248/" target="_blank"><i className="fa-sharp fa-solid fa-phone"></i></a></li>
                <li><a href="/ "><i className="fa-sharp fa-solid fa-address-card"></i></a></li>
            </ul>
            
        </nav>
    );

}
