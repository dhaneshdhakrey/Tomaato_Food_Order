import React from 'react';
import HcFoodCont from './HcFoodCont'; // Capitalized
import Brand from './Brand.js';

function FoodCont() {
    return (
        <div>
            <Brand/>
            <HcFoodCont/> {/* Capitalized here as well */}
        </div>
    )
}

export default FoodCont;
