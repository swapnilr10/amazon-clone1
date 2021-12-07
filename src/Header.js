import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import DropdownMenu from './DropdownMenu';
import { auth } from './firebase';
import Popup from './Popup';

function Header() {

    const[{basket, user}, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [pincode, setPincode] = useState({});

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }


    return (
        <div className = 'header'>
            <Link to = "/">
                <img 
                    className = 'header_logo'
                    src= "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
           <div className= 'header_nav'>
               <div>
                   <LocationOnOutlinedIcon  fontSize = {"small"} className = 'header_Location'/>
               </div>

               <div className ='header_optionLocation'>
                   <span className = 'header_optionLineOne'>Hello</span>
    <span className = 'header_optionLineTwo' onClick={() => setOpen(true)} >Select your address </span>
                   <Popup open = {open} setOpen = {setOpen}>
                   </Popup>
               </div>
           </div>

           <div className = 'header_search'>
               <input
                   className = 'header_searchInput'
                   type = "text"
               />
               <SearchIcon
                   className = 'header_searchIcon'
               />
           </div>

           <div className= 'header_nav'>
               <Link to ={ !user && '/login' }>
               <div onClick = {handleAuthentication} className ='header_option'>
                   <span className = 'header_optionLineOne'>Hello, {!user ? 'Sign in' : user.email}</span>
                   <span className = 'header_optionLineTwo'>
                       { user ? 'Sign Out' : 'Account & Lists ▼' }
                       <DropdownMenu />
                   </span>
               </div>
               </Link>
               
               <div className ='header_option'>
                   <span className = 'header_optionLineOne'>Returns</span>
                   <span className = 'header_optionLineTwo'>& Orders</span>
               </div>

               <Link to = "/checkout">
                <div className = "header_cart">
                    <div className = 'header_optionCart'>
                        <ShoppingCartOutlinedIcon /> 
                    </div>
               
                    <div className = 'header_optionCount'>  
                        <span className = 'header_cartCount'>{basket?.length}</span>
                        <span className = 'header_optionLineTwo'>Cart</span>
                    </div>
               </div>
               </Link> 
           </div>
        </div>
    )
}

export default Header;