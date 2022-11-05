import './PersonalForm.css';
import { Link } from 'react-router-dom';
import cx from 'classnames'
const PersonalForm = ({rounded = false, isToggled, onToggle}) => {

    const sliderCX = cx('slider', {
        'rounded': rounded
    })

    return ( 
        <div className="personal-form">
            <form>
                <div className="form-1">
                    <input
                        type='text'
                        className="ajo-name"
                        name="ajoName"
                        placeholder="Give a name to the group"
                        required
                    />
                    <div className="ajo-save-outer">
                        <select className="ajo-save"
                        required
                        >
                            <optgroup>
                                <option>Choose a plan</option>
                                <option>Weekly</option>
                                <option>Daily</option>
                                <option>Monthly</option>
                                <option>Annualy</option>
                            </optgroup>
                        </select>
                        <label>
                            Do you want to save daily, weekly, monthly or cutom
                        </label><br></br>
                    </div>
                </div>
                <div className="form-1">
                    <input
                    type='tel'
                    className="ajo-name"
                    name="ajoName"
                    placeholder="Amount"
                    required
                    ></input>
                    <div className="ajo-save-outer">
                        <select className="ajo-save"
                        required
                        >
                            <option selected>Account to debit</option>
                            <option>Sterling(007512345)</option>
                            <option>Polaris Bank(11554345)</option>
                            <option>First Bank(11223345)</option>
                        </select><br></br>
                    </div>
                </div>
                <div className="form-1">
                    <div className="ajo-name">
                        <p className='estimated'>Estimated returns: <span>40,000</span></p>
                    </div>
                    <div className="ajo-save-outer">
                        <div className="ajo-save lock-plan">
                            <p>Do you want to lock this plan</p>
                            <div className="switch">
                                <label className='lock'>
                                    <input type='checkbox' checked={isToggled} onChange={onToggle}/>
                                    <span className={sliderCX}/>
                                </label>
                            </div>
                        </div>
                        <label>
                            Locking your plan help you stay commited to your saving plan
                        </label><br></br>
                    </div>
                </div>
                <div className="form-1">
                    <div className="terms">
                        <input
                            type='checkbox'
                            className="ajo-terms"
                            name="ajoTerms"
                            required
                        ></input>
                        <label className='terms-label'>I accept the <span>terms and condition</span></label>
                    </div>
                    <div className="start-maturity">
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
                </div>
                <Link to='/personalajo/preview'>
                    <div className="submit">
                            <input 
                            type="submit"
                            name="submit"
                            value="Proceed"
                            ></input>
                    </div>
                </Link>
            </form>
        </div>
     );
}
 
export default PersonalForm;