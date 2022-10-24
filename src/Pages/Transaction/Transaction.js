import './Transaction.css';
import { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import DashboardTable from '../../Component/Table/DashboardTable';
import Modal from '../../Component/Modal/Modal';
const Transaction = () => { 
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="transaction">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="transaction-outer">
                            <div className="transaction-inner">
                                <div className="transaction-top">
                                    <div className="transaction-current-prev">

                                    </div>
                                    <div className="transaction-type">
                                        <div className="type-card-1">
                                            <p className="type-header">Group Ajo</p>
                                            <p className="type-body">Dutse Market Ajo</p>
                                            <p className="transaction-rate">20K/weekly</p>
                                        </div>
                                        <div className="type-card-2">
                                            <p className="type-header">Personal Savings</p>
                                            <p className="type-body">Life style plan </p>
                                            <p className="transaction-rate">20K/weekly</p>
                                        </div>
                                        <div className="type-card-3">
                                            <p className="type-header">Group Ajo</p>
                                            <p className="type-body">Dutse Market Ajo</p>
                                            <p className="transaction-rate">20K/weekly</p>
                                        </div>
                                        <div className="type-card-4">
                                            <p className="type-header">Personal Savings</p>
                                            <p className="type-body">Life style plan </p>
                                            <p className="transaction-rate">20K/weekly</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="transaction-center">
                                    <div className="transaction-title">
                                        <div className="transaction-history">
                                            <p>Transactions History</p>
                                        </div>
                                        <div className="transaction-filter">
                                            <div className="from-filter">
                                                <div>
                                                    <label>from</label>
                                                    <input type='date'></input>
                                                </div>
                                                <div>
                                                    <label>to</label>
                                                    <input type='date'></input>
                                                </div>
                                            </div>
                                            <div className="sort-filter">
                                               <select>
                                                    <optgroup>
                                                        <option>Sort by</option>
                                                    </optgroup>
                                               </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transaction-table">
                                        <DashboardTable open={setOpenModal}/>
                                        {openModal && <Modal closeModal={setOpenModal}/>}
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Transaction;