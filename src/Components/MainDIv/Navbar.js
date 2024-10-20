import React from 'react';

const TEXT_CLASS = "text-muted-foreground border border-border rounded-lg  bg-white";

const Header = () => {
    function searchHandler(e) {
        console.log(e.target.value);

    }
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-background mx-10 gap-6">
            <div className="flex items-center space-x-4 w-full justify-center ">
                <span className='font-bold text-3xl'>TOMAATO</span>
                <div className="flex w-[45%]">
                    <span className='border border-border rounded-lg p-4 shadow-lg w-[500%]'>
                        Dinnedevarapadu, Q2J
                    </span>
                    <input
                        className='border border-border rounded-lg p-4 shadow-lg w-[600%]' // Adjust this value
                        type='text'
                        onChange={searchHandler}
                    />
                </div>


                <div>
                    <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' className='w-12 h-12 rounded-full' alt='pic'></img>
                </div>
                <span>Shivam</span>
                <select className={TEXT_CLASS}>
                    <option></option>
                    <option>profile</option>
                    <option>language</option>
                    <option>select</option>
                    <option>Telugu</option>
                </select>
            </div>
            <div className="flex items-center space-x-4 mt-4 ml-[-770px]" > {/* Moved this below the search bar */}



            </div>


        </div>
    );
};

export default Header;
