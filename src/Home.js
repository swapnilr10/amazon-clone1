import React from 'react';
import './Home.css';
import Product from './Product';
import Row from './Row';
import Rowtwo from './Rowtwo';
import Rowthree from './Rowthree';
import ScrollRow from './ScrollRow';
import Picture from './Picture';
import EndField from './EndField';
import PrimeBanner from './PrimeBanner';
import Images from './Images';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

function Home() {

    return (
        <div className = 'home'>
            <div className = 'home_container'>
                <ArrowBackIosOutlinedIcon style={{ fontSize: 40 }}  className = 'prev_arrow' />
                <ArrowForwardIosOutlinedIcon style={{ fontSize: 40 }} className = 'next_arrow' />
                <Images/>
                <div className = "home_fadeBottom"></div>
                <div className = 'row_banner'>
                    <Row 
                        title = "Up to 70% off | Safety essentials"
                        image1 = "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/MAsk-1_1x._SY116_CB665789174_.jpg"
                        title1 = "Mask"
                        image2 = "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/Sanitizer-2_1x_02._SY116_CB665789174_.jpg" 
                        title2 = "Sanitizers"
                        image3 = "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/Healthcare-3_1x._SY116_CB665789174_.jpg"
                        title3 = "Healthcare device"
                        image4 = "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD21/Immunity-4_1x_02._SY116_CB665789174_.jpg"
                        title4 = "Immunity booster"
                    />
                    <Row 
                        title = "UP to 30% off | Everyday essentials"
                        image1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg"
                        title1 = "Cleaning essentials"
                        image2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg"
                        title2 = "Immunity & healthcare"
                        image3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg"
                        title3 = "Men’s grooming "
                        image4 = "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"
                        title4 = "Women’s care "
                    />
                    <Row
                        title = "Up to 45% off | Appliances"
                        image1 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/misc/Desktop-GW-QC_744X464--_1x._SY116_CB665720998_.jpg"
                        title1 = "Refrigerators"
                        image2 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/misc/Desktop-GW-QC_744X464--_02_1x._SY116_CB665720998_.jpg"
                        title2 = "Chimneys"
                        image3 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/misc/Desktop-GW-QC_744X464--_03_1x._SY116_CB665720998_.jpg"
                        title3 = "Air Conditioners"
                        image4 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/misc/Desktop-GW-QC_744X464--_04_1x._SY116_CB665720998_.jpg"
                        title4 = "Washing machines"
                    />
                    <div className = 'rowtwo_hide'>
                        <div className = 'row_hide'>
                          <Rowtwo />
                        </div>
                    </div>
                </div>
                <div className = 'home_row'>
                    <Product
                        id = "123456"
                        title = "2020 Apple MacBook Pro (13.3-inch/33.78 cm, 8GB RAM"
                        price = {117900}
                        image = "https://m.media-amazon.com/images/I/71QS992FD5L._AC_UY218_.jpg"
                        rating = {4}
                    />
                    <Product 
                        id = "1234574"
                        title = "Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa"
                        price = {4499}
                        image = "https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = "1234588"
                        title = "Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote"
                        price = {4999}
                        image = "https://m.media-amazon.com/images/I/51-1DEGYWjS._AC_UL320_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = "1234590"
                        title = "MAXPRO PTM405 2HP(4 HP Peak), Electric Power Running Machine"
                        price = {29999}
                        image = "https://m.media-amazon.com/images/I/61jTo5c6NTL._AC_UY218_.jpg"
                        rating = {5}
                    />
                </div>
                <div className = 'home_scrollrow'>
                    <ScrollRow 
                        t = "Prime day launches"
                        i1 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/DesktopShoveler_200x200_oneplus._CB663346216_.jpg"
                        i2 = " https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/hjv/vernac/v1/DesktopShoveler_400x400_Intel_1x._CB664168729_.jpg"
                        i3 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/hjv/vernac/v1/DesktopShoveler_400x400_FCUK-Smartwatch_1x._CB664168729_.jpg"
                        i4 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/DesktopShoveler_200x200_redmi._CB663346216_.jpg"
                        i5 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/hjv/vernac/v1/DesktopShoveler_400x400_1x._CB664168729_.jpg"
                        i6 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/hjv/vernac/v1/rohl/DesktopShoveler_400x400_Eureka-Forbes-Water-Purifier_1x._CB664235554_.jpg"
                        i7 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/hjv/vernac/v1/DesktopShoveler_400x400_LG-55-OLED-Smart-TV_1x._CB664168729_.jpg"
                        i8 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/hjv/vernac/v1/DesktopShoveler_400x400_Surf-Excel-Laundry-pods_1x._CB664168729_.jpg"
                        i9 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/DesktopShoveler_200x200_samsung._CB663346216_.jpg"
                    />
                </div>
                <div className = 'home_row'>
                    <PrimeBanner />
                    <Row
                        title = "Travel | Book today & get 12% back"
                        image1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/AugGWGraphics/GWREvised/1_Travel_Desktop_QC_186x116_Flights_._SY116_CB643935907_.jpg"
                        title1 = "Flight tickets"
                        image2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/AugGWGraphics/GWREvised/2_Travel_Desktop_QC_186x116_Bus_._SY116_CB643935907_.jpg"
                        title2 = "Bus tickets"
                        image3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/AugGWGraphics/GWREvised/3_CBCC-Travel_Desktop_QC_186x116._SY116_CB643935907_.jpg"
                        title3 = "Unlimited 2% Reward points"
                        image4 = "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/AugGWGraphics/GWREvised/4_laguage_Travel_Desktop_QC_186x116._SY116_CB643935907_.jpg"
                        title4 = "Essential travel products"
                    />
                    <div className = 'rowtwo_hide'>
                        <div className = 'row_hide'>
                          <Rowthree />
                        </div>
                    </div>
                </div>
                <div className = 'home_scrollrow'>
                    <ScrollRow 
                        t = "Today's Deal"
                        i1 = "https://m.media-amazon.com/images/I/41A3ArtrcXL.__AC_SY200_.jpg"
                        p1 = "₹179.00 - ₹20,999.00"
                        i2 = "https://m.media-amazon.com/images/I/41qVtz170fL.__AC_SY200_.jpg"
                        p2 = "₹37,990.00 - ₹69,990.00"
                        i3 = "https://m.media-amazon.com/images/I/51SiIqZnv0L.__AC_SY200_.jpg"
                        p3 = "₹221.00 - ₹2,035.00"
                        i4 = "https://m.media-amazon.com/images/I/41LhgBrER6L.__AC_SY200_.jpg"
                        p4 = "₹45,490.00 - ₹59,490.00"
                        i5 = "https://m.media-amazon.com/images/I/41n9dktha1L.__AC_SY200_.jpg"
                        p5 = "₹39,499.00 - ₹2,19,990.00"
                        i6 = "https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg"
                        p6 = "₹499.00 - ₹5,999.00"
                        i7 = "https://m.media-amazon.com/images/I/210CP8iyfrL.__AC_SY200_.jpg"
                        p7 = "₹2,399.00 - ₹7,999.00"
                        i8 = "https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg"
                        p8 = "₹99.00 - ₹2,909.00"
                        i9 = "https://m.media-amazon.com/images/I/41pecDHda2L.__AC_SY200_.jpg"
                        p9 = "₹249.00 - ₹1,999.00"
                        i10 = "https://m.media-amazon.com/images/I/516gCP4xewL.__AC_SY200_.jpg"
                        p10 = "₹179.00 - ₹7,599.00"
                        i11 = "https://m.media-amazon.com/images/I/51dJzBptMIL.__AC_SY200_.jpg"
                        p11 = "₹119.00 - ₹963.00"
                        i12 = "https://m.media-amazon.com/images/I/51ki8BsdibL.__AC_SY200_.jpg"
                        p12 = "₹199.00 - ₹2,099.00"
                    />
                </div>
                <div className = 'home_picture'>
                    <Picture />
                </div>
                <div>
                    <EndField />
                </div>
            </div> 
        </div>
    )
}

export default Home
