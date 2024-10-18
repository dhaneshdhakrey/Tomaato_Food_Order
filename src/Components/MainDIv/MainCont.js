import React from "react";
import Navbar from "./Navbar";
import FilterCont from "./FilterCont";
function MainCont(){
    return (
        <React.Fragment>
            <Navbar/>
            <FilterCont/>
        </React.Fragment>
    )
}
export default MainCont;