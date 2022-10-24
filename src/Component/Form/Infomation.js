import './Information.css';
import { Link } from 'react-router-dom';
const Information = () => {
    return ( 
        <div className="information">
            <div className="information-inner">
                <form>
                    <div className="fullname">
                        <label>Enter Full Name </label>
                        <input
                        type='text'
                        name="fullname"
                        className='info-input'
                        > 
                        </input>
                    </div>
                    <div className="phone-number">
                        <label>Phone Number</label>
                        <input
                        type='text'
                        name="fullname"
                        className='info-input'
                        > 
                        </input>
                    </div>
                    <div className="email-address">
                        <label>E-mail address</label>
                        <input
                        type='text'
                        name="fullname"
                        className='info-input'
                        > 
                        </input>
                    </div>
                    <div className="address">
                        <label>Address</label>
                        <input
                        type='text'
                        name="fullname"
                        className='info-input'
                        > 
                        </input>
                    </div>
                    <div className="occupation">
                        <label>Occupation </label>
                        <input
                        type='text'
                        name="fullname"
                        className='info-input'
                        > 
                        </input>
                    </div>
                    <Link to='/ajo/ajosuccessfull'>
                        <div className="submit">
                            <input 
                            type="submit"
                            name="submit"
                            value="Start"
                            ></input>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Information;