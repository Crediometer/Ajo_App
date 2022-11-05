import MatchForm from "../../Component/Form/MatchForm";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const MatchAjoCreate = () => {
    return ( 
        <div className="match-ajo-create">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/matchajo/available'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Yam sellers</p>
                        </div>
                        <div>
                            <MatchForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MatchAjoCreate;