import './Navbar.css'
import {BiSearch} from 'react-icons/bi';
import image from '../../image/image.png'
import {IoNotificationsOutline} from 'react-icons/io5'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <BiSearch/>
                    <input type="text" placeholder="find Transaction" />
                </div>
                <div className="navbar-profile">
                    <Link to='/notification'>
                        <div className="bell">
                            <IoNotificationsOutline/>
                            <div className="number"><p>2</p></div>
                        </div>
                    </Link>
                    <div className='navbar-profile-left'>
                        <div className="user-image">
                            <img src={image}></img>
                        </div>
                        <div className="user-name">
                            <p className='greeting'>Good day</p>
                            <p className='name'>Richard Stone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;