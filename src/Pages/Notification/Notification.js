import "./Notification.css";
import "../../Component/Form/PersonalForm.css"
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import cx from 'classnames';
import { Link } from "react-router-dom";
import { BiArrowBack, BiSearch } from "react-icons/bi";
import image from "../../image/profile-image.jpg";
import {MdOutlineDeleteOutline} from 'react-icons/md'
import { useState } from "react";
const Notification = ({rounded = false, isToggled, onToggle}) => {
    const sliderCX = cx('slider', {
        'rounded': rounded   
    })
    const [open, setOpen]= useState(false)
    return ( 
        <div className="notification">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body notification-body">
                        <div className="notification-outer">
                            <div className="notification-top">
                                <p className="notification-header">Notifications</p>
                                <div className="do-not-disturb">
                                    <p>Do not disturb</p>
                                    <div className="switch">
                                        <label className='lock'>
                                            <input type='checkbox' className="rounded" checked={isToggled} onChange={onToggle}/>
                                            <span className={sliderCX} rounded={true}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="back notification-back">
                                <Link to='/dashboard'>
                                    <BiArrowBack/>
                                </Link>
                                <p className="title">Inbox</p>
                            </div>
                            <div className="notification-search-outer">
                                <div className="notification-search">
                                    <BiSearch/>
                                    <input
                                    type="text"
                                    name="search"
                                    placeholder= "Search by name"
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="notification-inner">
                                <div className="notification-center">
                                    <div className="notification-nav">
                                        <div className="all">
                                            <p className="all-number">13</p>
                                            <p className="all-text">All</p>
                                        </div>
                                        <div className="today">
                                            <p className="today-number">4</p>
                                            <p className="today-text">Today</p>
                                        </div>
                                        <div className="clear-all">
                                            <p className="clear-number"><MdOutlineDeleteOutline/></p>
                                            <p className="clear-text">Clear All</p>
                                        </div>
                                    </div>
                                    <div className="notification-messages">
                                        <div className="messages">
                                            <p className="message-date">Today</p>
                                            <div className="messages-inner">
                                                <img src={image} className="message-image"></img>
                                                <div className="message-container">
                                                    <div className="message-text">
                                                        <p className="message-title">Olalekan Mercy</p>
                                                        <p className="message-content">Hi mosunmoluwa your 20k weekly  Dutse market ajo plan is successful! login into your app to view your plan or get intouch with us ifyour need further information</p>
                                                    </div>
                                                    <div className="message-date-delete">
                                                        <p className="date-time">02:15 PM <span>May 15</span></p>
                                                        <div className="delete">
                                                            {open && <div className="delete-buttons">
                                                                <button className="yes">Yes</button>
                                                                <button className="no" onClick={()=>{setOpen(false)}}>No</button>
                                                            </div>}
                                                            <span onClick={()=>{setOpen(true)}}><MdOutlineDeleteOutline/></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="messages-inner">
                                                <img src={image} className="message-image"></img>
                                                <div className="message-container">
                                                    <div className="message-text">
                                                        <p className="message-title">Olalekan Mercy</p>
                                                        <p className="message-content">Hi mosunmoluwa your 20k weekly  Dutse market ajo plan is successful! login into your app to view your plan or get intouch with us ifyour need further information</p>
                                                    </div>
                                                    <div className="message-date-delete">
                                                        <p className="date-time">02:15 PM <span>May 15</span></p>
                                                        <div className="delete">
                                                            {open && <div className="delete-buttons">
                                                                <button className="yes">Yes</button>
                                                                <button className="no" onClick={()=>{setOpen(false)}}>No</button>
                                                            </div>}
                                                            <span onClick={()=>{setOpen(true)}}><MdOutlineDeleteOutline/></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Notification;