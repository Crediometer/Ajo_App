import './Sidebar.css';
import {FiHome} from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import {BiWallet, BiNotification, BiSliderAlt, BiLogOut} from 'react-icons/bi';
import {BsPiggyBank} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi';
import {HiChevronDown} from 'react-icons/hi';
import {TbTransferIn} from 'react-icons/tb'
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
                    <NavLink to='/dashboard'
                    
                    >
                        <li>
                            <span><FiHome/>Dashboard</span>
                        </li>
                    </NavLink>
                    <div className={active1 ? 'submenu-ajo active1' : 'submenu-arrow'}>
                        <li>
                            <span className='sidebar-ajo'><div><BsPiggyBank/>Hoop</div> <div className="submenu-arrow" onClick={() => setActive(!active1)}><HiChevronDown/></div></span>
                        </li>
                        <ol className='sub-menu' >
                            <NavLink to='/ajo'>
                                <li><span>Group Hoop</span></li>
                            </NavLink>
                            <NavLink to='/matchajo'>
                                <li><span>Matching Hoop</span></li>
                            </NavLink>
                            <NavLink to='/personalajo'>
                                <li><span>Personal Hoop</span></li>
                            </NavLink>
                        </ol>
                    </div>
                    <NavLink to='/transaction'>
                        <li>
                            <span><BiSliderAlt/>Transaction</span>
                        </li>
                    </NavLink>
                    <NavLink to='/profile'>
                        <li>
                            <span><BiUser/>Profile</span>
                        </li>
                    </NavLink>
                    <NavLink to='/transfer'>
                        <li>
                            <span><TbTransferIn/>Transfer</span>
                        </li>
                    </NavLink>
                    <li>
                        <span><BiNotification/>Settings</span>
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
