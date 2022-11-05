import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
    <div className='Movies'> <h1>Movies</h1>
</div>
<div id='search' ><input   placeholder='Search Movie'/>
</div>


    </div>
  )
}

export default Header