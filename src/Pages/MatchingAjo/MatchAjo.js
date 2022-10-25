import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi';
import {Link} from 'react-router-dom';
const MatchAjo = () => {
    return ( 
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="body">
                    <Link to='/dashboard'>
                        <div className="back">
                            <BiArrowBack/>
                        </div>
                    </Link>
                    <div className="group-ajo">
                        <div className="group-ajo-inner">
                            <p>No Matching Ajo Found <br></br> Click on start to create a group </p>
                            <div className="button-container">
                                <Link to='/matchajo/available'>
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
 
export default MatchAjo;