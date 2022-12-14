import {GrTransaction} from 'react-icons/gr';
import {FaPeopleArrows} from 'react-icons/fa';
import {BiUser, BiTransferAlt} from 'react-icons/bi';
import {FiHome} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "./SidebarMobile.css";
const SidebarMobile = () => {
    return ( 
        <div className="sidebar-mobile">
            <div className="navigation-mobile">
                <ul>
                    <Link to='/dashboard'>
                        <li>
                            <span><FiHome/>Home</span>
                        </li>
                    </Link>
                    <Link to='/transaction'>
                        <li>
                            <span><BiTransferAlt/>Transaction</span>
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li>
                            <span><FaPeopleArrows/>People</span>
                        </li>
                    </Link>
                    <Link to='/profile'>
                        <li>
                            <span><BiUser/>Profile</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
     );
}
 
export default SidebarMobile;