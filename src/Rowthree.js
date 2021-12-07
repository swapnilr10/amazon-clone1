import React from 'react';
import './Rowthree.css';

function Rowthree() {
    return (
        <div className = 'rowtwo'>
            <div className = 'rowtwo_title'>
                <p>Pay your credit card bills on Amazon</p>
            </div>
            <div>
                <img className = 'rowtwo_image'
                  src = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg" 
                />
            </div>
            <div>
                <p className = 'rowtwo_pay'>Pay now</p>
            </div>
        </div>
    )
}

export default Rowthree;
