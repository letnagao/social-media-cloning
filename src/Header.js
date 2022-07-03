import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <h1>Header</h1>

        <div className="header__left">
            <img src="" alt=""/>

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
            
        </div>
    </div>
  )
}

export default Header