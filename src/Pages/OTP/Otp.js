import {Link} from 'react-router-dom';
import './otp.css'
import reset from '../../image/Group 692.png';
const Otp = () => {
    return ( 
        <div className="otp">
            <div className="login-left">
                <p className='login-logo'>Credio</p>
                <div className="group-lower">
                    <div className="group-lower-inner">
                        <div className="group-outer">
                            <div className="group">
                                <p>Group saving and thrift On the go!</p>
                            </div>
                        </div>
                        <div className="lorem-outer">
                            <p className='lorem'>Lörem ipsum påde sanas prelig fåvaning. Byter dol kovis. Presade fuktig. Odat trev samt vassa. Hyvis prenydarat, bigen </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="otp-form-section">
                <div className="otp-form-section-inner">
                    <div className="otp-text">
                        <p className="otp-header">Enter OTP</p>
                        <p className="otp-body">A 4-Digit code whas been sent to your number</p>
                    </div>
                    <div className="otp-form">
                        <div className="forget-image">
                            <img src={reset}></img>
                        </div>
                        <form>
                            <div className="otp-pin">
                                <input
                                type="tel"
                                name='phone'
                                placeholder='Enter OTP'
                                required
                                ></input>
                            </div>
                            <div className="submitbutton">
                                <Link to='/ResetPassword'>
                                    <input 
                                    type="submit"
                                    name="submit"
                                    value="Submit"
                                    ></input>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Otp;