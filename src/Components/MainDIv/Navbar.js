import React from "react";
import SearchBar from "./SearchBar";
import classes from './Navbar.module.css';

function Navbar() {
    return (
        <div className={classes.Navbar}>
            <span>Tomaato</span>
            <div className={classes.SearchBar}>
                <SearchBar />
            </div>
            <div>
                <button>Sign In</button>
                shivam
            </div>
        </div>
    );
}

export default Navbar;
