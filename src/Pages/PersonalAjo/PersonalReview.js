import Table from 'react-bootstrap/Table';
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './PersonalReview.css'
const PersonalReview = () => {
    return ( 
        <div className="personal-review">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="personal-preview-outer">
                            <div className="personal-review-inner">
                                <p className="life-style lifestyle">Life Style</p>
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
 
export default PersonalReview;