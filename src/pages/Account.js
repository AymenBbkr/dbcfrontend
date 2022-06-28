import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import APIService from "../components/APIService";

function Account() {
    const token = localStorage.getItem("mytoken");

    const [profile, setProfile] = useState();
    const [basicProfile, setBasicProfile] = useState()
    const [refresh, setRefresh] = useState(0);

    const handleChangeForm = (event) => {
        setProfile(prev => { return { ...prev, [event.target.name]: event.target.value } })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
       const data= await APIService.updateProfile(token, profile);
        setRefresh(prev => prev++)
    }
    useEffect(async () => {
        const data = await APIService.getProfile(token);
        setProfile(data)
        setBasicProfile(data)
    }, [token, refresh])
    return (
        <Fragment>
            <Header />
            <Leftnav />

            <div className="main-content bg-lightblue theme-dark-bg right-chat-active">

                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="middle-wrap">
                            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                                    <Link to="/profile" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-white"></i></Link>
                                    <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Account Details</h4>
                                </div>
                                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 text-center">
                                            <figure className="avatar ms-auto me-auto mb-0 mt-2 w100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFLT15neUzGtgzKmg1jerPbKa5iiV7-OlpA&usqp=CAU" alt="avater" className="shadow-sm rounded-3 w-100" /></figure>
                                            <h2 className="fw-700 font-sm text-grey-900 mt-3">{`${basicProfile?.firstname} ${basicProfile?.lastname}`}</h2>
                                            <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">{basicProfile?.town}</h4>

                                        </div>
                                    </div>

                                    <form onSubmit={onSubmit} >
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">First Name</label>
                                                    <input type="text" name="firstname" value={profile?.firstname} onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Last Name</label>
                                                    <input type="text" name="lastname" value={profile?.lastname} onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Email</label>
                                                    <input type="text" name="mail" value={profile?.mail} onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Phone</label>
                                                    <input type="text" name="phone" value={profile?.phone} onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Country</label>
                                                    <input type="text" value={profile?.country} name="country" onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Address</label>
                                                    <input type="text" value={profile?.adress} name="adress" onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Town / City</label>
                                                    <input type="text" value={profile?.town} name="town" onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Postcode</label>
                                                    <input type="text" name="postcode" value={profile?.postcode} onChange={handleChangeForm} className="form-control" />
                                                </div>
                                            </div>



                                            <div className="col-lg-12 mb-3">
                                                <label className="mont-font fw-600 font-xsss mb-2 text-dark">Description</label>
                                                <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" value={profile?.description} onChange={handleChangeForm} name="description" placeholder="Write your message..." ></textarea>
                                            </div>

                                            <div className="col-lg-12">
                                                <button  type="submit"  className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">Save</button>
                                            </div>
                                        </div>

                                    </form>
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


export default Account;