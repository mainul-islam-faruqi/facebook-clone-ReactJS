import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt=""/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>

            <div className="header__middle">

            </div>

            <div className="header__right">

            </div>
        </div>
    );
};

export default Header;