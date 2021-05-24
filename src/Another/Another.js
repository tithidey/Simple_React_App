import React from 'react';
import './Another.css'

const another = (props) =>{
    return(
        <div className="app">
            {/* <img src="https://static.wixstatic.com/media/a27d24_141d8acd77844219820daf141c1d3058~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/a27d24_141d8acd77844219820daf141c1d3058~mv2.jpg" />
            <h5>Spicy fuchka</h5>
            <p>price: BDT-35</p> */}

            <img src={props.url}/>
                <h5>{props.name}</h5>
            <p>price: BDT-{props.price}</p>    
        </div>
    );
};

export default another;