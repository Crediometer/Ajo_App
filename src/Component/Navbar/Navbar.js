import './Navbar.css'
import {BiSearch} from 'react-icons/bi';
import image from '../../image/image.png'
import {IoNotificationsOutline} from 'react-icons/io5'
import {IoMdArrowDropdown} from 'react-icons/io'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <BiSearch/>
                    <input type="text" placeholder="find Transaction" />
                </div>
                <div className="navbar-profile">
                    <div className="bell">
                        <IoNotificationsOutline/>
                        <div className="number"><p>2</p></div>
                    </div>
                    <div className="user-image">
                        <img src={image}></img>
                    </div>
                    <div className="user-name">
                        <p className='greeting'>Good day</p>
                        <p className='name'>Richard Stone</p>
                    </div>
                    <div className="dropdown">
                        <IoMdArrowDropdown/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;