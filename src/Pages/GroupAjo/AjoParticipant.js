import './AjoParticipant.css'
import {IoAdd} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
const AjoParticipant = () => {
    return ( 
        <div className="ajo-participant">
            <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="body">
                    <div className="back">
                        <Link to='/ajo/createajo'>
                            <BiArrowBack/>
                        </Link>
                    </div>
                    <div className="ajo-participant-body">
                        <p>Add Participants :</p>
                        <Link to='/ajo/addcontact'>
                            <div className="add">
                                <IoAdd/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default AjoParticipant;