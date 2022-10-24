import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';
import './TransferRate.css';
const TransferRate = () => {
    return ( 
        <div className="transfer-rate">
            <div className="money-in-out">
                <div className="money-in">
                    <p className='money-in-text'>Money In<span><MdArrowDropDown/></span></p>
                    <p className='money-in-amount'>N378,032</p>
                </div>
                <div className="money-out">
                    <p className='money-out-text'>Money out<span><MdArrowDropUp/></span></p>
                    <p className='money-out-amount'>N987,027</p>
                </div>
            </div>
        </div>
     );
}
 
export default TransferRate;