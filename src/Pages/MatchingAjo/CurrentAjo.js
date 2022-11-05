import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import './CurrentAjo.css'
import Available from '../../Component/Matching/Available';
const CurrentAjo = () => {
    return ( 
        <div className="current-ajo">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/matchajo'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Matching Ajo</p>
                        </div>
                        <div className="current-ajo-inner">
                            <div className="current-ajo-body">
                                <div className="match-header">
                                    <p>Matching Ajo Avaliable</p>
                                </div>
                                <Available/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
     );
}
 
export default CurrentAjo;