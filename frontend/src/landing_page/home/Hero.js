import React from 'react';

function Hero() {
    return ( 
        <div>
            <div className='container p-5 mb-5'>
                <div className='row text-center'>
                    <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>

                    <h1 className='mt-5 fs-2'>Invest in everything</h1>
                    <p>Online platform to invest in stocks,derivation, mutual fund,and more</p>
                    <button onClick={()=>window.location.href="http://localhost:3000/signup"}  className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:" auto" }}>Signup Now</button>

                   
                </div>
            </div>
        </div>
     );
}

export default Hero;
