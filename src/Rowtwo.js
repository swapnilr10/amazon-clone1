import React from 'react';
import './Rowtwo.css';

function Rowtwo() {
    return (
        <div className = 'rowtwo'>
            <div className = 'rowtwo_title'>
                <p>Up to 30% off | Camera devices </p>
            </div>
            <div>
                <img className = 'rowtwo_image'
                  src = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/SBD/GW/Dashboard/xcm_banners_smallbdays-gw-cc-379x304-8_758x608_in-en._SY304_CB665832339_.jpg" 
                />
            </div>
            <div>
                <p className = 'rowtwo_pay'>See all</p>
            </div>
        </div>
    )
}

export default Rowtwo;
