import React from 'react'

const Brand = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold ml-[19%] m-10'> Top Brands For you!!!</h1>
      <div className='ml-[19%] m-10 w-[60%] flex justify-between gap-8 hover:cursor-pointer'>
      <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                    <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726678404.png?output-format=webp' alt='pic' />
                    <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>KFC</h2>
        </div>
        <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                    <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/brand_creatives/logos/d3345e6268b9a6dc3ded1cef25bed37b1706247671.png?output-format=webp' alt='pic' />
                    <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Relish</h2>
        </div>
        <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                    <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/brand_creatives/logos/5bdc430efefd3af2b1e753023eb0dbce_1615279001.png?output-format=webp' alt='pic' />
                    <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Polar Bear</h2>
        </div>
        <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                    <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/brand_creatives/logos/7c26cec5328c49e583876f3d0a747623_1707139532.png?output-format=webp' alt='pic' />
                    <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>The Belgian waffle</h2>
        </div>
        <div className='relative flex flex-col items-center hover:scale-105 transition-transform duration-300'>
                    <img className='w-44 h-46 transition-transform duration-300' src='https://b.zmtcdn.com/data/brand_creatives/logos/fa014392388b0b79de4bf8310cc88c00_1617371121.png?output-format=webp' alt='pic' />
                    <h2 className='font-semibold text-xl mt-4 transition-transform duration-300'>Pizza Hut</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Brand

