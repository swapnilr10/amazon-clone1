import React from 'react'
import './Row.css'

function Row({title, image1, title1, image2, title2, image3, title3, image4, title4}) {
    return (
        <div className = 'row'>
            <div>
                <p className = 'row_info'>{title}</p>
            </div>
            <div className = 'images_container'>
              <div className = 'rows'>
                  <div className = 'row_images'>
                      <div className = 'row_images1'>
                          <img className = 'row_image' src = {image1}/>
                      </div>
                      <div className = 'row_imageLable'>
                          <span className = 'row_imageLables'>{title1}</span> 
                      </div>
                  </div>
                  <div className = 'row_images'>
                      <div className = 'row_images1'>
                          <img className = 'row_image' src = {image2}/>
                      </div>
                      <div className = 'row_imageLable'>
                          <span className = 'row_imageLables'>{title2}</span>
                      </div>
                  </div>
              </div>
              <div className = 'rows_two'>
                  <div className = 'row_images'>
                      <div className = 'row_images1'>
                          <img className = 'row_image' src = {image3}/>
                      </div>
                      <div className = 'row_imageLable'>
                          <span className = 'row_imageLables'>{title3}</span> 
                      </div>
                  </div>
                  <div className = 'row_images'>
                      <div className = 'row_images1'>
                          <img className = 'row_image' src = {image4} />
                      </div>
                      <div className = 'row_imageLable'>
                          <span className = 'row_imageLables'>{title4}</span>
                      </div>
                  </div>
              </div>
              <div>
                  <a className = 'row_more'>See all small Buisness Days offers</a>
              </div>
            </div>  
        </div>
    )
}

export default Row
