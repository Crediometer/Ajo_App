import './Sidebar.css';
import {FiHome} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {BiWallet, BiNotification, BiSliderAlt, BiLogOut} from 'react-icons/bi';
import {HiChevronDown} from 'react-icons/hi'
import { useState } from 'react';
const Sidebar = () => {
    const [active1, setActive] = useState(false)
    return ( 
        <div className="sidebar">
            <div className="sidebarlogo">
                <p>Credio.</p>
            </div>
            <div className="navigations">
                <ul>
                    <Link to='/dashboard'>
                        <li
                        id={window.location.pathname == '/dashboard'? "active" : ""}
                        onClick={()=>{window.location.pathname = '/dashboard';
                        }}
                        >
                            <span><FiHome/>Dashboard</span>
                        </li>
                    </Link>
                    <div className={active1 ? 'submenu-ajo active1' : 'submenu-arrow'}>
                        <li
                        >
                            <span className='sidebar-ajo'><div><BiWallet/>Ajo</div> <div className="submenu-arrow" onClick={() => setActive(!active1)}><HiChevronDown/></div></span>
                        </li>
                        <ol className='sub-menu' >
                            <li
                                id={window.location.pathname == '/ajo'? "active" : ""}
                                onClick={()=>{window.location.pathname = '/ajo';
                                }}
                            ><span>Group Ajo</span></li>
                            <li
                                id={window.location.pathname == '/matchajo'? "active" : ""}
                                onClick={()=>{window.location.pathname = '/matchajo';
                                }}
                            ><span>Matching Ajo</span></li>
                            <li
                                id={window.location.pathname == '/personalajo'? "active" : ""}
                                onClick={()=>{window.location.pathname = '/personalajo';
                                }}
                            ><span>Personal Ajo</span></li>
                        </ol>
                    </div>
                    <Link to='/transaction'>
                        <li
                        id={window.location.pathname == '/transaction'? "active" : ""}
                        onClick={()=>{window.location.pathname = '/transaction';
                        }}
                        >
                            <span><BiNotification/>Transaction</span>
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li
                        id={window.location.pathname == '/profile'? "active" : ""}
                        onClick={()=>{window.location.pathname = '/profile';
                        }}>
                            <span><BiSliderAlt/>Profile</span>
                        </li>
                    </Link>
                    <li>
                        <span><BiSliderAlt/>Fund Account</span>
                    </li>
                    <Link to='/transfer'>
                        <li
                        id={window.location.pathname == '/transfer'? "active" : ""}
                        onClick={()=>{window.location.pathname = '/transfer';
                        }}
                        >
                            <span><BiSliderAlt/>Transfer</span>
                        </li>
                    </Link>
                    <li>
                        <span><BiSliderAlt/>Ask A Friend</span>
                    </li>
                </ul>
                <div className="logout">
                    <p><BiLogOut/>Logout</p>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;
