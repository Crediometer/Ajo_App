import './reset.css';
import reset from '../../image/Group 692.png';
import {Link} from 'react-router-dom'
const Reset = () => {
    return ( 
        <div className="resetpassword">
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
            <div className="login-form-section">
                <div className="login-form-section-inner">
                    <div className="reset">
                        <p>Reset Password</p>
                    </div>
                    <div className="login-form">
                        <div className="forget-image">
                            <img src={reset}></img>
                        </div>
                        <div className="reset-password">
                            <input
                            type='password'
                            name='password'
                            placeholder='Enter Password'
                            required
                            ></input>
                        </div>
                        <div className="reset-password">
                            <input
                            type='password'
                            name='password'
                            placeholder='Confirm New Password'
                            required
                            ></input>
                        </div>
                        <div className="submit">
                            <Link to='/'>
                                <input 
                                type="submit"
                                name="submit"
                                value="Login"
                                ></input>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Reset;