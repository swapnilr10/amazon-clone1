import React, { useEffect, useState } from 'react';
import './Headerone.css';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Headroom from 'headroom.js';

function Headerone() {

    return (
        <div className = 'headerone '>
            <div>
                <FormatListBulletedIcon fontSize = {"small"} className = 'headerone_list'/>
            </div>
            <div className = 'headerone_lines'>    
                <span className = 'headerone_lineList'>All</span>
            </div>
            <span className = 'headerone_Line'>Best Sellers</span>
            <span className = 'headerone_Line'>Mobiles</span>
            <span className = 'headerone_Line'>Fashion</span>
            <span className = 'headerone_Line'>Electronics</span>
            <span className = 'headerone_Line'>Prime</span>
            <span className = 'headerone_Line'>New Releases</span>
            <span className = 'headerone_Line'>Customer Service</span>
            <span className = 'headerone_Line'>Computers</span>
            <span className = 'headerone_Line'>Amazon Pay</span>
            <div>
                <img 
                    className = 'headerone_logo'
                    src = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
                />
            </div>
        </div>
    )
}

export default Headerone
