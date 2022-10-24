import './login.css';
import {Link} from 'react-router-dom';
const Login = () => {
    return ( 
        <div className="login-page">
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
                    <div className="welcome">
                        <p>Welcome back</p>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="phone">
                                <label>Phone number</label><br></br>
                                <input
                                type="tel"
                                name='phone'
                                placeholder='Enter phone number'
                                required
                                ></input>
                            </div>
                            <div className="password">
                                <label>Password</label><br></br>
                                <input
                                type='password'
                                name='password'
                                placeholder='*************'
                                required
                                ></input>
                            </div>
                            <div className="forget">
                                <div className="logged">
                                    <input
                                    type='checkbox'
                                    name='loggedin'
                                    ></input> 
                                    <label>Keep me logged in</label>
                                </div>
                                <div className="forget-password">
                                    <Link to='/ForgetPassword'>
                                        <p>Forget password ?</p>
                                    </Link>
                                </div>
                            </div>
                            <Link to="/Dashboard">
                                <div className="submit">
                                    <input 
                                    type="submit"
                                    name="submit"
                                    value="Login"
                                    ></input>
                                </div>
                            </Link>
                            <div className="account">
                                <p className="signin">Don’t have an account yet ? <span>Sign up </span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;