import './forgetpassword.css';
import image from '../../image/amico.png';
import {Link} from 'react-router-dom'
const ForgetPassword = () => {
    return ( 
        <div className="forgetpassword">
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
            <div className="forget-form-section">
                <div className="forget-form-section-inner">
                    <div className="forget-text">
                        <p className='forget-header'>Forgot Password?</p>
                        <p className='forget-body'>Please enter the phone number associated with this account.</p>
                    </div>
                    <div className="forget-form">
                        <div className="forget-image">
                            <img src={image}></img>
                        </div>
                        <form>
                            <div className="phonenumber">
                                <input
                                type="tel"
                                name='phone'
                                placeholder='Phone Number*'
                                required
                                ></input>
                            </div>
                            <div className="submitbutton">
                                <Link to='/Otp'>
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
 
export default ForgetPassword;