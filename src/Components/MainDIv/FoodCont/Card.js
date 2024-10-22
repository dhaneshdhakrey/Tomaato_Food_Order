import React, { useState } from 'react';

const cardClass = "bg-card p-4 rounded-lg shadow-full border hover:bg-gray-100 w-[200%]";
const flexClass = "flex items-center justify-between";
const textPrimaryClass = "text-primary";
const textMutedClass = "text-muted-foreground";
const hoverBgClass = "hover:bg-gray-300 transition"; // Adjusted class for hover effect
const borderClass = "border border-border rounded-full";
const secondaryClass = "bg-red-500 text-white hover:bg-red-600 hover:text-white transition rounded-full px-2";

const MenuItem = ({ name, imageSrc, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className={`${flexClass} ${hoverBgClass} p-4 rounded-lg`}>
      <div className={flexClass}>
        <img src={imageSrc} alt={name} className="mr-2" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className={textMutedClass}>{description}</p>
          <span className={textPrimaryClass}>{price}</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className={textMutedClass}>Amount</span>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          className={`w-16 mx-2 ${borderClass}`}
          min="1"
        />
        <button className={secondaryClass}>+ Add</button>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className={cardClass}>
      <span className='text-2xl ml-[45%] font-bold shadow cursor-pointer hover:font-extrabold'>MENU</span>
      <div className="space-y-5 space-x-6 mx-10  p-4">
        <MenuItem 
          name="Sushi"
          imageSrc="hsjdnjk"
          description="Finest fish"
          price="$22.99"
        />
        <MenuItem
          name="Schnitzel"
          imageSrc="https://placehold.co/24x24?text=🍽️"
          description="A german specialty!"
          price="$16.50"
        />
        <MenuItem
          name="Barbecue Burger"
          imageSrc="https://placehold.co/24x24?text=🍔"
          description="American, raw, meaty"
          price="$12.99"
        />
        <MenuItem
          name="Green Bowl"
          imageSrc="https://placehold.co/24x24?text=🥗"
          description="Healthy...and green..."
          price="$18.99"
        />
        <MenuItem
          name="Green Bowl"
          imageSrc="https://placehold.co/24x24?text=🥗"
          description="Healthy...and green..."
          price="$18.99"
        />
        
      </div>
    </div>
  );
};

export default Menu;
