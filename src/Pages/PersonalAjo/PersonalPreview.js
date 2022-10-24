import Table from 'react-bootstrap/Table';
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './PersonalPreview.css'
const PersonalPreview = () => {
    return ( 
        <div className="personal-preview">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/personalajo'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Personal Savings</p>
                        </div>
                        <div className="personal-preview-outer">
                            <div className="personal-preview-inner">
                                <p className="life-style">Life Style</p>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td className='selected-option'>Amount to be saved</td>
                                            <td className='selected-choice'>10,000/weekly</td>
                                        </tr>
                                        <tr>
                                            <td className='selected-option'>Period</td>
                                            <td className='selected-choice'>20 Weeks</td>
                                        </tr>
                                        <tr>
                                            <td className='selected-option'>Start Date</td>
                                            <td className='selected-choice'>15 Jan 2022</td>
                                        </tr>
                                        <tr>
                                            <td className='selected-option'>Maturity Date</td>
                                            <td className='selected-choice'>08 Nov 2022</td>
                                        </tr>
                                        <tr>
                                            <td className='selected-option'>Estimate Return</td>
                                            <td className='selected-choice'>40,000</td>
                                        </tr>
                                        <tr>
                                            <td className='selected-option'>This account is locked until</td>
                                            <td className='selected-choice'>08 Nov 2022</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="current-account">
                                    <div className="current-account-left">
                                        <p className="debit">Account to debit</p>
                                        <p className="credio-account">Criedo Pay: N 25,000</p>
                                    </div>
                                    <div className="current-account-right">
                                        <p className='change'>Change this</p>
                                    </div>
                                </div>
                                <p className='terms-info'>This account selected would be debited every friday of the week. By setting up this plan you are agreeing to the <span>terms and condition.</span></p>
                                <Link to='/personalajo/success'>
                                    <div className="submit">
                                        <input 
                                        type="submit"
                                        name="submit"
                                        value="Start Plan"
                                        ></input>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PersonalPreview;