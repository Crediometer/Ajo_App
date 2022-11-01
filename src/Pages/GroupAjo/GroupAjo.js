import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {IoNotificationsOutline} from 'react-icons/io5'
import './GroupAjo.css'
const GroupAjo = () => {
    return ( 
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="body">
                    <Link to='/Dashboard'>
                    <div className="back">
                        <BiArrowBack/>
                        <p className="title title-mobile">Group Hoop</p>
                        {/* <div className="bell">
                            <IoNotificationsOutline/>
                            <div className="number"><p>2</p></div>
                        </div> */}
                    </div>
                    </Link>
                    <div className="group-ajo">
                        <div className="group-ajo-inner">
                            <p>No Group(s) Found <br></br> Click on start to create a group </p>
                            <div className="button-container">
                                <Link to='/ajo/createajo'>
                                    <button>Start</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default GroupAjo;