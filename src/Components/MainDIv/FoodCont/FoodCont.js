import React ,{useState} from 'react';
import HcFoodCont from './HcFoodCont.js'; 
import Brand from './Brand.js';

function FoodCont() {
   let [currentTotal,setTotal]= useState(0);
    //let totalAmount=0;
    function addItemHandler(e){
        console.log(e.target.value,e.target.name);
        let tempnum=parseInt(e.target.value,10);
       // totalAmount=totalAmount+tempnum;
        
        setTotal(currentTotal+tempnum);
    }
    return (
        <div>
            <Brand/>
            <HcFoodCont addItem={addItemHandler}/> 
            PAY={currentTotal};
        </div>
    )
}
 
export default FoodCont;
