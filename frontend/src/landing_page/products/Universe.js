import React from 'react';

function Universe() {
    return (  
        <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/smallcaseLogo.png' />
                <p className='text-muted text-small mt-3'>Thematic Investment Platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/streakLogo.png' style={{width: "60%"}}/>
                <p className='text-muted text-small'>Algo & Strategic Platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/sensibullLogo.svg' style={{width: "40%"}}/>
                <p className='text-muted text-small mt-3'>Option Trading Platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/zerodhaFundhouse.png' style={{width: "60%"}}/>
                <p className='text-muted text-small mt-2'>Asset Management</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/goldenpiLogo.png' />
                <p className='text-muted text-small mt-4'>Bonds Trading Platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/dittoLogo.png' style={{width: "40%"}}/>
                <p className='text-muted text-small'>Insurance</p>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "25%", margin: "0 auto"}}>Signup now</button>
        </div>
    </div>
    );
}

export default Universe;