import success from '../../image/success.png';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import { useState, useEffect } from 'react';
import MoonLoader from "react-spinners/MoonLoader";
import './PersonalPreview.css'
const PersonalSuccessful = () => {
    const [spinner, setSpinner]= useState(false)
    useEffect(()=>{
        setSpinner(true)
        setTimeout(()=>{
            setSpinner(false)
        }, 5000)
    },[])
    return ( 
        <div className="personal-successful">
             <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/personalajo/preview'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Dutse Market 20k weekly </p>
                        </div>
                        <div className="ajo-successfull-inner">
                        {
                            spinner?
                            <MoonLoader
                                color={'#B11226'}
                                loading={spinner}
                                size={80}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /> : 
                            <div className="ajo-successfull-body">
                                <div className="ajo-successfull-body-inner">
                                    <img src={success}></img>
                                    <p>Success</p>
                                    <p className='personal-success-text'>Success your life style plan of 10k has been created <span>Successfully</span></p>
                                    <div>
                                        <Link to='/personalajo/review'>
                                            <button>See Status</button>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>  
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PersonalSuccessful;