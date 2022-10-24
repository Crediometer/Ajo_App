import './ProfileForm.css';
import profile from '../../image/profile-image.jpg';
import {FiEdit2} from 'react-icons/fi'
const ProfileForm = () => {
    return ( 
        <div className="profileform">
            <div className="profile-image">
                <div className='profile-image-inner'>
                <div className="edit-profile">
                    <img src={profile}></img>
                    <div className="edit-icon">
                        <FiEdit2/>
                    </div>
                </div>
                <p>Edit Profile</p>
                </div>
            </div>
            <form>
                <div className="form-5">
                    <div className="profile-name">
                        <label>First name</label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>Last name</label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Phone number</label><br></br>
                        <input
                        type='tel'
                        placeholder='090xxxx985455'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>E-mail</label><br></br>
                        <input
                        type='email'
                        placeholder='Efahdesmon@gmail.com'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Optional E-mail</label><br></br>
                        <input
                        type='email'
                        placeholder='Efahde9879_1smon@gmail.com'
                        ></input>
                    </div>
                </div>
                <div className="form-5">
                    <div className="profile-name">
                        <label>Nationality </label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>state</label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Password</label><br></br>
                        <input
                        type='password'
                        placeholder='xxxxxxxxxxxxxxxxxxx'
                        ></input>
                    </div>
                </div>
                <div className="submit-2">
                    <input
                    type='submit'
                    value='Save'
                    ></input>
                </div>
            </form>
        </div>
     );
}
 
export default ProfileForm;