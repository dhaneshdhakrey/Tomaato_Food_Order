import React from "react";
import Navbar from "./Navbar";
import FilterCont from "./FilterCont";
import FoodCont from "./FoodCont";
import Brand from "./Brand";

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