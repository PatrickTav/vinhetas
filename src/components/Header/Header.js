import React from 'react'

import Navbar from '../Navbar/Navbar'

import "./Header.css"
const Header = () => {
  


  return (
    <header className='header-container'>
      <div>
          <h1 className='logo'>PlayD'égua</h1>     
      </div>
      
      
    <div className='visual-mode'>
        <Navbar/>
      
    </div>
    
      
    </header>
  )
}

export default Header