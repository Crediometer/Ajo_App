import Information from "../../Component/Form/Infomation";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import {BiArrowBack} from 'react-icons/bi';
const MatchInfo = () => {
    return ( 
        <div className="match-info">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <BiArrowBack/>
                            <p className="title">Yam Sellers</p>
                        </div>
                        <div className="current-ajo-inner">
                            <div className="current-ajo-body">
                                <div className="match-header">
                                    <p>Input Information</p>
                                </div>
                                <Information/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MatchInfo;