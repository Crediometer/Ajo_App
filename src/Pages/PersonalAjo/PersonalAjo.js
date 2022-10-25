import PersonalForm from "../../Component/Form/PersonalForm";
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi';
import './PersonalAjo.css'
import { useState } from "react";
import { Link } from "react-router-dom";
const PersonalAjo = () => {
    const [isToggled, setIstoggled] = useState(false);
    return ( 
        <div className="personal-ajo">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/dashboard'><BiArrowBack/></Link>
                            <p className="title">Personal Savings</p>
                        </div>
                        <div className="personal-ajo-inner">
                            <PersonalForm rounded={true} isToggled={isToggled} onToggle={()=>setIstoggled(!isToggled)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PersonalAjo;