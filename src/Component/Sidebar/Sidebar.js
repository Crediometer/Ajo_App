import './Sidebar.css';
import {FiHome} from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
                    <Link to='/dashboard'>
                        <li>
                            <span><FiHome/>Dashboard</span>
                        </li>
                    </Link>
                    <div className={active1 ? 'submenu-ajo active1' : 'submenu-arrow'}>
                        <li>
                            <span className='sidebar-ajo'><div><BsPiggyBank/>Hoop</div> <div className="submenu-arrow" onClick={() => setActive(!active1)}><HiChevronDown/></div></span>
                        </li>
                        <ol className='sub-menu' >
                            <Link to='/ajo'>
                                <li><span>Group Hoop</span></li>
                            </Link>
                            <Link to='/matchajo'>
                                <li><span>Matching Hoop</span></li>
                            </Link>
                            <Link to='/personalajo'>
                                <li><span>Personal Hoop</span></li>
                            </Link>
                        </ol>
                    </div>
                    <Link to='/transaction'>
                        <li>
                            <span><BiSliderAlt/>Transaction</span>
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li>
                            <span><BiUser/>Profile</span>
                        </li>
                    </Link>
                    <Link to='/transfer'>
                        <li>
                            <span><TbTransferIn/>Transfer</span>
                        </li>
                    </Link>
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
