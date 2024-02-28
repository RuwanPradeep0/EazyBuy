import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.png';

const Header = () => {
  return (
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">
        <div className="w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
           
           <div className="flex items-center flex-1">
            
           <Link className="h-10 mr-1 sm:mr-4" to='/' >
                <img draggable='false' src={logo} alt='logo'/>
           </Link>


           </div>
          
        </div>
    </header>
  )
}

export default Header;
