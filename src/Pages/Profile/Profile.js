import './Profile.css'
import { Link } from 'react-router-dom';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import {BsChatDots} from 'react-icons/bs';
import {BiTargetLock, BiHelpCircle} from 'react-icons/bi'
import {SiKnowledgebase} from 'react-icons/si';
import {IoMdWallet} from 'react-icons/io';
import {FaUsers, FaMoneyBillAlt} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import ProfileForm from '../../Component/Form/ProfileForm';
import SidebarMobile from '../../Component/Sidebar/SidebarMobile';
const Profile = () => {
    return ( 
        <div className="profile">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="profile-outer">
                            <div className="profile-inner">
                                <div className="profile-sidebar">
                                    <ul>
                                        <li>
                                            <span><BsChatDots/></span> Edit Profile
                                        </li>
                                        <li>
                                            <span><BsChatDots/></span> Chat with cerdio
                                        </li>
                                        <li>
                                            <span><BiTargetLock/></span> My goals
                                        </li>
                                        <li>
                                            <span><SiKnowledgebase/></span> Knowledge center
                                        </li>
                                        <li>
                                            <span><IoMdWallet/></span> Balance & Transaction
                                        </li>
                                        <li>
                                            <span><FaUsers/></span> Community
                                        </li>
                                        <li>
                                            <span><FaMoneyBillAlt/></span> Refer and earn
                                        </li>
                                        <li>
                                            <span><AiFillSetting/></span> Settings
                                        </li>
                                        <li>
                                            <span><BiHelpCircle/></span> Help center
                                        </li>
                                        <li>
                                            <span><MdDelete/></span> Delete account
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-form">
                                    <ProfileForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SidebarMobile/>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;