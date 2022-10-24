import Table from 'react-bootstrap/Table';
import {MdOutlineIosShare} from 'react-icons/md';
import {FaTimes} from 'react-icons/fa';
import './Modal.css'
const Modal = ({closeModal}) => {
    return ( 
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <p>Transaction Details</p>
                </div>
                <div className="modal-bank">
                    <p>Credio <br></br> Pay</p>
                </div>
                <div className="modal-body">
                    <p className="modal-amount">-N23,000</p>
                    <div className="modal-table">
                        <Table>
                            <tbody>
                                <tr>
                                    <td className='modal-option'>Date & Time</td>
                                    <td className='modal-choice modal-choice-1'>Apr 12,2022 at 07:04</td>
                                </tr>
                                <tr>
                                    <td className='modal-option'>Transaction fee</td>
                                    <td className='modal-choice'>Free</td>
                                </tr>
                                <tr>
                                    <td className='modal-option'>Transaction status</td>
                                    <td className='modal-choice'>SUCCESSFUL</td>
                                </tr>
                                <tr>
                                    <td className='modal-option'>Transaction ID</td>
                                    <td className='modal-choice modal-choice-1'>657789090</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="modal-buttons">
                        <div className="cancle" onClick={() => {closeModal(false)}}>
                            <div className="cancle-icon"><FaTimes/></div>
                            <p>Cancle</p>
                        </div>
                        <div className="share">
                            <div className="share-icon"><MdOutlineIosShare/></div>
                            <p>Share Receipt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;
