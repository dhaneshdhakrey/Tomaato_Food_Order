import React from "react";
import Navbar from "./Navbar/Navbar";
import FilterCont from "./FilterCont/FilterCont";
import FoodCont from "./FoodCont/FoodCont";
import Brand from "./FoodCont/Brand";

function MainCont(){
    return (
        <React.Fragment>
            <Navbar/>
            <FilterCont/>
            <FoodCont/>
            <Brand/>
        </React.Fragment>
    )
}
export default MainCont;