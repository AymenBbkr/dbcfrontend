import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';

import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


class Settings extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Leftnav />

                <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

                                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">Settings</h4>
                                                <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Account</div>
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block me-0"><Link to="/socialaccount" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Social Accounts</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block  me-0"><Link to="/password" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Password</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/defaultnoti" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Notification</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                </ul>

                                                <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Other</div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Theme</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <Popupchat />
                <Appfooter />
            </Fragment>
        );
    }
}

export default Settings;