import Sidebar from "../../Component/Sidebar/Sidebar";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import './GroupAjoCreate.css';
import CreateAjo from "../../Component/Form/CreateAjo";
const GroupAjoCreate = () => {
    return ( 
        <div className="group-ajo-create">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/ajo'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Group Ajo</p>
                        </div>
                        <div>
                            <CreateAjo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default GroupAjoCreate;