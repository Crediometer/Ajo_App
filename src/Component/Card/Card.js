import './Card.css';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {RiFileCopyFill} from 'react-icons/ri'
const Card = (props) => {
    return ( 
        <div className="card">
            <div className="card-header">
                <p>Credio Pay</p>
                <AiOutlineEyeInvisible/>
            </div>
            <div className="card-body">
                <p className="balance">Balance:</p>
                <p className="balance-amount">N378,032<span className='dot'>.</span><span className='decimal'>00</span></p>
                <p className="account-number">XD083...9452 <span><RiFileCopyFill/></span></p>
            </div>
        </div>
     );
}   
 
export default Card;