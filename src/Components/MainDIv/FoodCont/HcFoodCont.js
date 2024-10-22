import React from 'react'

function HcFoodCont(props){
    function addHandler(e){
        props.addItem(e);
        //console.log(e.target.value,e.target.name);
        
    }

    return (
        <div>
            <div className='border p-2px solid bg-gray-100'>
                <h1 className='text-3xl font-semibold ml-[19%] m-10'> Inspiration for your first order</h1>
                <div className='ml-[19%] m-10 w-[60%] flex justify-between gap-8 hover:cursor-pointer'>
                    <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                        <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' alt='pic' />
                        <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Biryani</h2>
                        
                        <div className='rounded-3xl absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                            <p className='text-white text-lg mb-2'>₹299</p>
                            <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300' value='299' name='Biryani' onClick={addHandler}>Add to Cart</button>
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                        <img className='w-44 h-46 transition-transform duration-300 rounded-full' src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' alt='pic' />
                        <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Pizza</h2>
                        
                        <div className='rounded-3xl absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                            <p className='text-white text-lg mb-2'>₹299</p>
                            <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300' value='299' name='Pizza' onClick={addHandler}>Add to Cart</button>
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                        <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' alt='pic' />
                        <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Chicken</h2>
                        
                        <div className='rounded-3xl absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                            <p className='text-white text-lg mb-2'>₹299</p>
                            <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300' value='299' name='Chicken' onClick={addHandler}>Add to Cart</button>
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                        <img className='w-44 h-46 transition-transform duration-300 rounded-full' src='https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png' alt='pic' />
                        <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Fried rice</h2>
                        
                        <div className='rounded-3xl absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                            <p className='text-white text-lg mb-2'>₹299</p>
                            <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300' value='299' name='Fried rice' onClick={addHandler}>Add to Cart</button>
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                        <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' alt='pic' />
                        <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Paneer</h2>
                        
                        <div className='rounded-3xl absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                            <p className='text-white text-lg mb-2'>₹299</p>
                            <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300' value='299' name='Paneer' onClick={addHandler}>Add to Cart</button>
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                        <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png' alt='pic' />
                        <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Paratha</h2>
                        
                        <div className='rounded-3xl absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                            <p className='text-white text-lg mb-2'>₹299</p>
                            <button className='bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300' value='299' name='Paratha' onClick={addHandler}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default HcFoodCont;
