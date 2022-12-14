import React from 'react'
import { Link } from 'react-router-dom';
import  './header.css';

const Header = () => {
  return (
    <div className='header__top'>
        <div>
            <h1><Link to= '/home'>RA-096 </Link></h1>
        </div>
        <ul>
        <li> <Link to= '/home'>Home</Link> </li>
        <li> <Link to= '/about'>About</Link> </li>
        <li> <Link to= '/project'>Project</Link> </li>
        <li> <Link to= '/technologies'>Technologies</Link> </li>
        <li> <Link to= '/contact'>Contact</Link> </li>
        <li><a href="https://github.com/RajatAdhikari" target="blank"> <i class="fa-brands fa-2x  fa-github"></i></a></li>
        <li> <a href="https://www.linkedin.com/in/rajat-adhikari-832325207/" target="blank"><i class="fa-brands fa-2x  fa-linkedin"></i></a></li>
        </ul>
    </div>
  )
}

export default Header