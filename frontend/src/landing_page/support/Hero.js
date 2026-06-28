import React from 'react';

function Hero() {
    return (  
       <section className='container-fluid' id="supports">
        <div className=' p-3  ' id="supwrap">
            <h5>Support Portal</h5>
            <a href='' style={{textDecoration:"none"}}>Track Tickets</a>
        </div>
        <div className='row p-3 m-3'>
            <div className='col-6 p-3 '>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg. how do I activate F&O'/><br/>
               <a href='' style={{textDecoration:"none"}}>Track account opening    </a> &nbsp;&nbsp; 
               <a href=''style={{textDecoration:"none"}}>Track segment activation </a>&nbsp;&nbsp;
               <a href=''style={{textDecoration:"none"}}>Intraday margins </a>&nbsp;&nbsp;
               <a href=''style={{textDecoration:"none"}}>Kite user manual </a>
            </div>
             <div className='col-1'></div>
            <div className='col-5 p-3'>
                <h1>Feature</h1>
                <ol>
                    <li>   <a href='' style={{textDecoration:"none"}}>Latest Intraday leverages and Square-off timings</a></li>
                    <li> <a href='' style={{textDecoration:"none"}}>Surveillance measure on scrips - May 2026</a> </li>
                </ol>
              
                
            </div>
            
        </div>
       </section>
    );
}

export default Hero;