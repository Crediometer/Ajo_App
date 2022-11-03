import { Link } from "react-router-dom";

const TransferUser = () => {
    return ( 
        <div className="transfer-user">
            <form>
                <div className="form-5">
                    <div className="profile-name">
                        <label> Select account to be deduted </label><br></br>
                        <select>
                            <optgroup>
                                <option>Credio pay- N376,994 </option>
                                <option>Credio Ajo- N976,994 </option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="profile-name">
                        <label>Enter Account number </label><br></br>
                        <input
                        type='tel'
                        placeholder='98984-09489-48593-95'
                        ></input>
                    </div>
                </div>
                <div className="form-5">
                    <div className="profile-name">
                        <label>Bank name</label><br></br>
                        <input
                        type='text'
                        placeholder='credio app '
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>Amount</label><br></br>
                        <input
                        type='tel'
                        placeholder='N30,000'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Benaficials full name </label><br></br>
                        <input
                        type='text'
                        placeholder='Mosunmoluwa ruth olaleye '
                        ></input>
                    </div>
                </div>
                <div className="form-5">
                    <div className="profile-name">
                        <label>Select status</label><br></br>
                        <input
                        type='text'
                        placeholder='Pend transaction'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>Do you want to repeat this transaction </label><br></br>
                        <select>
                            <optgroup>
                                <option>Yes</option>
                                <option>No</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="form-6 form-7">
                    <div className="profile-other profile-textarea">
                        <label>Description</label><br></br>
                        <textarea
                        placeholder='Pend transaction'
                        ></textarea>
                    </div>
                </div>
                <Link to='/transfer/success'>
                    <div className="submit">
                            <input 
                            type="submit"
                            name="submit"
                            value="Done"
                            ></input>
                    </div>
                </Link>
            </form>
        </div>
     );
}
 
export default TransferUser;