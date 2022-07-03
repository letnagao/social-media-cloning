import React from "react"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
        <h1>Header</h1>

        <div className="header__left">
            <img src="" alt=""/>
            <div className="header__search">
                <SearchIcon />
            </div>
        </div>

        <div className="header__right">
            
        </div>
    </div>
  )
}

export default Header