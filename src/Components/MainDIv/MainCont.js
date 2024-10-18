import React from "react";
import Navbar from "./Navbar";
import FilterCont from "./FilterCont";
import FoodCont from "./FoodCont";

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