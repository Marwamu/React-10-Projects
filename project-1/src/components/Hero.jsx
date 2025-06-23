import React from 'react';

const Hero = () => {
    return (
        <main className='container hero'>
            <div  className='txt-body'>
                <h1 className='title'>YOUR FEET DESERVE THE BEST</h1>
                <p className='para'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='body-btn'>
                    <button className='main-btn'>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>
                <div className='brands'>
                   <p className='icon-title'>Also Available On</p>
                <div className='icons'>
                    <img className='facebook' src=".\images\facebook.png" alt="" />
                    <img className='amzon' src=".\images\amzon.png" alt="" />
                </div> 
                </div>
                
            </div>
            <div className='img-body'>
                <img src=".\images\shoe_image.png" alt="" />
            </div>
        </main>
    );
}

export default Hero;
