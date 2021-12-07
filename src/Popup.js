import React, { useState, useEffect } from 'react';
import './Popup.css';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Popup(props) {

    const {open, setOpen} = props;

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Dialog open={open} maxWidth = 'xs' onClose={handleClose}>
            <DialogTitle className = 'popup_content'>
                <span className = 'popup_title1'>Choose your location</span>
            </DialogTitle>
                <DialogContent dividers >
                    <DialogContentText>
                        <span className = 'popup_title2'>Select a delivery location to see product availability and delivery options</span>
                    </DialogContentText>
                    <Link to = '/login'>
                    <button className = 'popup_button'>Sign in to see your addresses</button>
                    </Link>
                    <p className = 'pincode_title'>or enter an Indian pincode</p>
                    <input className = 'location_input'
                      type = ""
                      placeholder = "Enter Pincode"
                    />
                    <button className = 'location_button' type = "submit" onClick={handleClose} >Apply</button>
                </DialogContent>
        </Dialog>
    )
}

export default Popup;
