import { Link } from 'react-router-dom';
import './CreateAjo.css';
const CreateAjo = () => {
    return ( 
        <div className="create-ajo">
            <div className="create-ajo-inner">
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
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                    <option>Monthly</option>
                                    <option>Annualy</option>
                                    <option>Custom</option>
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
                        />
                        <div className="ajo-save-outer">
                            <select className="ajo-save"
                            required
                            >
                                <option>Day of the week money sould be debited </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                            </select><br></br>
                        </div>
                    </div>
                    <select className="ajo-save ajo-account"
                    required
                    >
                        <option>Account to Debit</option>
                    </select><br></br>
                    <select className="ajo-save ajo-number"
                    required
                    >
                        <option>Number range of participant</option>
                    </select><br></br>
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
                    <Link to='/ajo/add'>
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
        </div>
     );
}
 
export default CreateAjo;