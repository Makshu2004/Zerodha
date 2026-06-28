import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 p-5 col-md-12  col-sm-12  '>
                    <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-lg-6 p-5 mt-3 col-md-12  col-sm-12 '>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>2+ million Zerodha clients constribute to oner 15% of all volumes in India daily by trading and investing in:</p>

                <div className='row'>
                    <div className='col-6'>
                         <ul>
                    <li>
                        <p>Futures and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivations</p>
                    </li>
                    <li>
                        <p>Futures and Options</p>
                    </li>
                </ul>
                    </div>
                     <div className='col-6 '>
                         <ul>
                    <li>
                        <p>Stock & IPo</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bound and Govt. Securities</p>
                    </li>
                </ul>
               
                     </div>
                </div>
                 <img src='media/pressLogos.png ' style={{width:"90%"}}/>
               </div>

            </div>
        </div>
      );
}

export default  Awards;