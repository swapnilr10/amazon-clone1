import React from 'react';
import './ScrollRow.css';

function ScrollRow({t, i1, p1, i2, p2, i3, p3 ,i4, p4, i5, p5, i6, p6, i7, p7, i8, p8, i9, p9, i10, p10}) {
    return (
        <div className = 'scrollrow'>
            <div className = 'scrollrow_title'>
                <p>{t}</p>
            </div>
            <div className = 'scrollrow_allContent'>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image'
                      src = {i1} 
                    />
                    <p className = 'scrollrow_price'>{p1}</p>
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image'
                      src = {i2}
                    />
                    <p className = 'scrollrow_price'>{p2}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i3}
                    />
                    <p className = 'scrollrow_price'>{p3}</p>   
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i4}
                    />
                    <p className = 'scrollrow_price'>{p4}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i5}
                    />
                    <p className = 'scrollrow_price'>{p5}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i6}
                    />
                    <p className = 'scrollrow_price'>{p6}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i7}
                    />
                    <p className = 'scrollrow_price'>{p7}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i8}
                    />
                    <p className = 'scrollrow_price'>{p8}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i9}
                    />
                    <p className = 'scrollrow_price'>{p9}</p>    
                </div>
                <div className = 'scrollrow_content'>
                    <img className = 'scrollrow_image' 
                      src = {i10}
                    />
                    <p className = 'scrollrow_price'>{p10}</p>    
                </div>
            </div>
        </div>
    )
}

export default ScrollRow;
