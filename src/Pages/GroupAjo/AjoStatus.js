import './AjoStatus.css';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const AjoStatus = () => {
    return ( 
        <div className="ajostatus">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/ajo/ajosuccessfull'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Dutse Market 20k weekly </p>
                        </div>
                        <div className="ajo-status-inner">
                            <div className="ajo-status-body">
                                <form>
                                    <label>Total numberof participants</label>
                                    <input
                                    type='tel'
                                    value='10'
                                    className="ajo-save"
                                    >
                                    </input><br></br>
                                    <div className="form-3">
                                        <div className="ajo-status-outer">
                                            <label>Accepted Participant</label>
                                            <select className="ajo-save"
                                            >
                                                <optgroup>
                                                    <option>7</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div>
                                            <label>Participants position</label>
                                            <input
                                            type='text'
                                            className="ajo-save"
                                            name="ajoName"
                                            value='Femi temi - 1'
                                            />
                                        </div>
                                    </div>
                                    <div className='form-4'>
                                        <label>Contribution amount</label>
                                        <input
                                        type='tel'
                                        value='10,000 weekly'
                                        className="ajo-save"
                                        >
                                        </input><br></br>
                                    </div>
                                    <div className='form-4'>
                                        <label>paid participant</label>
                                        <input
                                        type='tel'
                                        value='0'
                                        className="ajo-save"
                                        >
                                        </input><br></br>
                                    </div>
                                    <div className='form-4'>
                                        <label>UnPaid participant</label>
                                        <input
                                        type='tel'
                                        value='10'
                                        className="ajo-save"
                                        >
                                        </input><br></br>
                                    </div >
                                    <div className='form-4'>
                                        <label>Next Benefactor</label>
                                        <input
                                        type='tel'
                                        value='Femi Temi'
                                        className="ajo-save"
                                        >
                                        </input><br></br>
                                    </div>
                                    <div className="start-maturity form-4">
                                        <div className="start">
                                            <label>Start Date</label>
                                            <select className='ajo-start' 
                                            required
                                            >
                                                <optgroup>
                                                    <option>Today</option>
                                                    <option>Tomorrow</option>
                                                    <option>Next Week</option>
                                                    <option>Next Month</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div className="maturity">
                                            <label>Maturity Date</label>
                                            <input
                                            type="date"
                                            className='ajo-date'
                                            name='ajodate'
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                        <div className="submit">
                                            <Link to='/dashboard'>
                                                <input 
                                                type="submit"
                                                name="submit"
                                                value="OK"
                                                ></input>
                                            </Link>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AjoStatus;