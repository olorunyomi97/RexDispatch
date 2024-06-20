import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';
import FundModal from './fundmodal';
import WithdrawModal from './withdrawmodal';
import Moment from 'react-moment';
import './account.css';

const Account = (data) => {
    const [fundmodal, setFundmodal] = useState(false);
    const [withdrawModal, setWithdrawModal] = useState(false);
    const [balances, setBalance] = useState(null);
    const [earnings, setEarnings] = useState(null);
    const [deposits, setDeposits] = useState(null);
    const [withdrawals, setWithdrawals] = useState(null);
    const [transactions, setTransaction] = useState(null);

    const modalClose = () => {
        setFundmodal(false);
    }
    const modalShow = () => {
        setFundmodal(true);
    }
    const toggleClose = () => {
        setWithdrawModal(false);
    }
    const toggleShow = () => {
        setWithdrawModal(true);
    }

    const API_URL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(API_URL + '/general/account/balance?model=business' ,data)
        .then(data => {
            console.log(data.data.data)
            setBalance(data.data.data)
            // setEarnings(data.data.data)
        });
        axios.get(API_URL + '/general/account/total_earnings?model=business' ,data)
        .then(data => {
            console.log(data.data.data)
            setEarnings(data.data.data)
        });
        axios.get(API_URL + '/general/account/total_deposits?model=business' ,data)
        .then(data => {
            console.log(data.data.data)
            setDeposits(data.data.data)
        });
        axios.get(API_URL + '/general/account/total_withdrawals?model=business' ,data)
        .then(data => {
            console.log(data.data.data)
            setWithdrawals(data.data.data)
        });
        axios.get(API_URL + '/general/transactions/transaction_history?model=business' ,data)
        .then(data => {
            console.log(data.data.data)
            setTransaction(data.data.data)
        });
    },[data, API_URL]);

    return ( 
        <div className="user_account">
            <div className="user_account_jumbotron user_flex">
                <PagesNav />
                <div className="container">
                    <div className="row user_account_row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <p className="user_account_title pb-5">My Account</p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            {/* Account body */}
            <section className="account_body"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card account_card pt-3 pb-3">
                            <AccountTab />
                            {/* wallet section */}
                            <div className="wallet mt-5">
                                <div className="container">
                                <div className="row pl-5">
                                
                                    <div  className="col-md-4">
                                        <div className="card business_wallet_card">
                                            <div className="row">
                                                <div className="col-7 pr-4 pt-4 pl-5">
                                                    <p className="available_balance">Available Balance</p>
                                                </div>
                                            </div>
                                                {
                                                balances && balances.map((balance, w) => {
                                                return (
                                                    <div  key={w} data={balance} className="row">
                                                        <div className="col-7 pl-5">
                                                            <p className="wallet_balance">₦{balance.balance}</p>
                                                        </div>
                                                    </div>
                                                        ) 
                                                    })
                                                }
                                            <div className="row pb-2">
                                                <div className="col-6 pl-5 mb-3">
                                                <Link className="offer_button" to="#" onClick={modalShow}>Add Funds +</Link>
                                                <FundModal fundmodal={fundmodal} modalClose={modalClose} />
                                                </div>
                                                <div className="col-6">
                                                    <p className="wallet_subtext">
                                                        <Link to="#" onClick={toggleShow}className="text-dark" style={{textDecoration:'none'}}>withdraw</Link>
                                                        <WithdrawModal withdrawModal={withdrawModal} toggleClose={toggleClose}  />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   <div className="col-md-2">
                                   {
                                        earnings && earnings.map((earn, j) => {
                                        return (
                                            <div key={j} data={earn} className="card mini_wallet_card p-3">
                                                <p className="business_wallet_text mb-0">Total Earnings</p>
                                                <p className="business_wallet_subtext mb-0">₦{Math.round(earn.total_earnings * 100) /100}</p>
                                            </div>
                                            ) 
                                        })
                                    } 
                                    </div>
                                    <div className="col-md-2">
                                    {
                                        deposits && deposits.map((deposit, i) => {
                                        return (
                                            <div key={i} data={deposit} className="card mini_wallet_card1 p-3">
                                                <p className="business_wallet_text mb-0">Total Deposits</p>
                                        <p className="business_wallet_subtext mb-0">₦{Math.round(deposit.total_deposits * 100) / 100}</p>
                                            </div>
                                            ) 
                                        })
                                    } 
                                    </div>
                                    <div className="col-md-2">
                                    {
                                        withdrawals && withdrawals.map((withdraw,k) => {
                                        return (
                                        <div key={k} data={withdraw} className="card mini_wallet_card2 p-3">
                                            <p className="business_wallet_text mb-0">Total Withdrawals</p>
                                            <p className="business_wallet_subtext mb-0">₦{(withdraw.total_withdrawals * 100) / 100}</p>
                                        </div>
                                            ) 
                                        })
                                    } 
                                    </div>
                                    </div>
                                </div>
                                {/* Recent Transaction section */}
                                <div className="container">
                                    <div className="row pl-5 pr-5">
                                        <div className="col-md-5">
                                            <p className="recent_text">Recent Transactions</p>
                                        </div>
                                        <div className="container wallet_table">
                                        {( transactions != null && transactions.length <=0) ? 
                                                <div style={{justifyContent:'center'}}> 
                                                    <h5 className="pt-3">No Transactions made yet.</h5>
                                                </div>
                                            : 
                                            <>
                                                <Table hover>
                                                    <thead>
                                                        <tr className="table_title">
                                                            <th className="table_item p-3" style={{borderRadius:"20px 0px 0px 0px"}}>Date</th>
                                                            <th className="table_item p-3">Description</th>
                                                            <th className="table_item p-3">Status</th>
                                                            <th className="table_item p-3" style={{borderRadius:"0px 20px 0px 0px"}}>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="table_body">
                                                    {
                                                        transactions && transactions.map((transaction,k) => {
                                                            return k <= 4 ? 
                                                            (
                                                            <tr key={k} data={transaction}>
                                                                <td className="table_item2 p-3"><Moment format='MM-DD-YYYY'>{transaction.createdAt}</Moment></td>
                                                                <td className="table_item2 p-3"style={{textTransform:'capitalize'}}>{transaction.narration}</td>
                                                                <td className="table_item2 p-3" style={{textTransform:'capitalize'}}>{transaction.transaction_type}</td>
                                                                <td className="table_item2 p-3">₦{transaction.amount }</td>
                                                            </tr>
                                                            ) : undefined
                                                        })
                                                    } 
                                                    </tbody>
                                                </Table>
                                            </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </div>
    )
}

export default Account;