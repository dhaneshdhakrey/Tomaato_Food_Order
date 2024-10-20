import React from "react";
const BUTTON_CLASS = "bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg border border-border";

function FilterCont(){
    return (
        <div className='flter continer flex justify-center flex-row gap-3 ml-[-56.25rem] mb-5'>
            <button className={BUTTON_CLASS}>Filters</button>
            <div className ='Actual filter'></div>
            <button className={BUTTON_CLASS}>Pure veg</button>
            <select className="border border-border rounded-lg p-2 bg-white">
                    <option>Cuisines</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>Italian</option>
                </select>
        </div>
    )
}
export default FilterCont;