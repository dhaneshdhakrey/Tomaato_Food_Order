import React from "react";
import Navbar from "./Navbar/Navbar";
import FilterCont from "./FilterCont/FilterCont";
import FoodCont from "./FoodCont/FoodCont.js";

function MainCont(){
    return (
        <React.Fragment>
            <Navbar/>
            <FilterCont/>
            <FoodCont/>
            
        </React.Fragment>
    )
}
export default MainCont;