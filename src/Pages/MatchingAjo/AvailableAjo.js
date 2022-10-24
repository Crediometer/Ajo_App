import Sidebar from "../../Component/Sidebar/Sidebar";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import CreateAjo from "../../Component/Form/CreateAjo";
import { BiArrowBack } from "react-icons/bi";
const AvailableAjo = () => {
    return ( 
        <div className="available-ajo">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/matchajo'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Yam sellers</p>
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
 
export default AvailableAjo;