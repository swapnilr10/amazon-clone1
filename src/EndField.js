import React, {useState} from 'react';
import './EndField.css';

function EndField() {

    const[visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);

    return (
        <div className = 'endfield'>
            <div className = 'endfield_button'>
                <button className = 'button' onClick={scrollToTop} >Back to top</button>
            </div>
            <div className = 'endfield_info'>
                <div className = 'endfield_info1'>
                    <div className = 'endfield_info2'>
                        <div className = 'endfield_infoHeadline'>
                            <p>Get to Know Us</p>
                        </div>
                        <div className = 'endfield_infoHeadline1'>
                            <p className = 'endfield_infoHeadline2'>About us</p>
                            <p className = 'endfield_infoHeadline2'>Careers</p>
                            <p className = 'endfield_infoHeadline2'>Press Releases</p>
                            <p className = 'endfield_infoHeadline2'>Amazon Care</p>
                            <p className = 'endfield_infoHeadline2'>Gift a Smile</p>
                        </div>
                    </div>
                    <div className = 'endfield_info2'>
                        <div className = 'endfield_infoHeadline'>
                            <p>Connect with Us</p>
                        </div>
                        <div className = 'endfield_infoHeadline1'>
                            <p className = 'endfield_infoHeadline2'>Facebook</p>
                            <p className = 'endfield_infoHeadline2'>Twitter</p>
                            <p className = 'endfield_infoHeadline2'>Instagram</p>
                        </div>
                    </div>
                    <div className = 'endfield_info2'>
                        <div className = 'endfield_infoHeadline'>
                            <p>Make Money with Us</p>
                        </div>
                        <div className = 'endfield_infoHeadline1'>
                            <p className = 'endfield_infoHeadline2'>Sell on Amazon</p>
                            <p className = 'endfield_infoHeadline2'>Sell under Amazon Accelerator</p>
                            <p className = 'endfield_infoHeadline2'>Amazon Global Selling</p>
                            <p className = 'endfield_infoHeadline2'>Become a Affiliate</p>
                            <p className = 'endfield_infoHeadline2'>Fulfilment by Amazon</p>
                            <p className = 'endfield_infoHeadline2'>Advertisi Your Products</p>
                            <p className = 'endfield_infoHeadline2'>Amazon Pay on Merchants</p>
                        </div>
                    </div>
                    <div className = 'endfield_info2'>
                        <div className = 'endfield_infoHeadline'>
                            <p>Let Us Help You</p>
                        </div>
                        <div className = 'endfield_infoHeadline1'>
                            <p className = 'endfield_infoHeadline2'>COVID-19 and Amazon</p>
                            <p className = 'endfield_infoHeadline2'>Your Account</p>
                            <p className = 'endfield_infoHeadline2'>Returns Centre</p>
                            <p className = 'endfield_infoHeadline2'>100% Purchase Protection</p>
                            <p className = 'endfield_infoHeadline2'>Amazon App Download</p>
                            <p className = 'endfield_infoHeadline2'>Amazon Assistant Download</p>
                            <p className = 'endfield_infoHeadline2'>Help</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'endfield_condition'>
                <div className = 'endfield_condition1'>
                    <p className = 'endfield_conditionText'>Conditions of Use & Sale</p>
                    <p className = 'endfield_conditionText'>Privacy Notice</p>
                    <p className = 'endfield_conditionText'>Interest-Based Ads</p>
                    <p className = 'endfield_conditionText'>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    )
}

export default EndField
