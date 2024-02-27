import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.png';

const Header = () => {
  return (
    <header className="bg-lime-800">
        <div >
           
           <div >
            
           <Link to='/' >
                <img draggable='false' src={logo} alt='logo'/>
           </Link>


           </div>
          
        </div>
    </header>
  )
}

export default Header;
