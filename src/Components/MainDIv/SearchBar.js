import React from "react";

function SearchBar(){
    function SerchHandler(e){
        console.log(e.target.value);      
    }
    return(
        <div>
            <div classes='AdressBar'>

            </div>
            <div classes='SearchBox'>
            <label>
                <input type='text' onChange={SerchHandler}/>
            </label>
            </div>
        </div>
    )
}
export default SearchBar;