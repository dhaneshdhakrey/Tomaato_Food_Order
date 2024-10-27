import React from "react";
import Navbar from "./Navbar/Navbar";
import FilterCont from "./FilterCont/FilterCont";
import FoodCont from "./FoodCont/FoodCont.js";
import Card from "./FoodCont/Card.js";
import Cart from "./Navbar/Cart.js";
import AddCart from "../../store/addcart-context.js";

function MainCont(){
    function testHandler(e){
        console.log(e.target.value,e.target.name);
    }
    return (
        <React.Fragment>
            <AddCart.Provider>
            <Navbar/>
             <Cart/> 
            <FilterCont/>
            <FoodCont addItemMaintCont={testHandler}/>
            <div className="flex flex-row items-center p-4 bg-background mx-[15%] gap-10"> 
            <Card/>
            </div>
            </AddCart.Provider>
        </React.Fragment>
    )
}
export default MainCont;