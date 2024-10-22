import React from "react";
import Navbar from "./Navbar/Navbar";
import FilterCont from "./FilterCont/FilterCont";
import FoodCont from "./FoodCont/FoodCont.js";
import Card from "./FoodCont/Card.js";


function MainCont(){
    return (
        <React.Fragment>
            <Navbar/>
            <FilterCont/>
            <FoodCont/>
            <div className="flex flex-row items-center p-4 bg-background mx-[15%] gap-10"> 
            <Card/>
            </div>
        </React.Fragment>
    )
}
export default MainCont;