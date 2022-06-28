import React, { Component, Fragment, useEffect, useState } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';

import Pagetitle from '../components/Pagetitle';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import Load from '../components/Load';
import APIService from "../components/APIService";


function Group() {
    const token = localStorage.getItem("mytoken");

    const [clientList, setClientList] = useState([]);
    const [search, setSearch] = useState(null);
    const [refresh, setRefresh] = useState(0);

    const follow = async (id) => {
        await APIService.addConnection(token, id);
        setRefresh(state=>state+1);
    }
    const unFollow = async (id) => {
        await APIService.removeConnection(token, id);
        setRefresh(state=>state+1);
    }
    useEffect(async () => {
        const data = await APIService.getAllClients(token);
        setClientList(data)
    }, [token,refresh])
    return (
        <Fragment>
            <Header />
            <Leftnav />

            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <div className="col-xl-12">

                                <Pagetitle title="Group" />

                                <div className="row ps-2 pe-1">
                                    {clientList.map((value, index) => (

                                        <div key={index} className="col-md-6 col-sm-6 pe-2 ps-2">
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-0 mt-2">
                                                <div className="card-body position-relative h100 bg-image-cover bg-image-center" style={{ backgroundImage: `url("https://www.pngkit.com/png/full/929-9293815_picture-download-background-asheville-recovery-residence-blue-gradient.png")` }}></div>
                                                <div className="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                                                <h1 className="fw-500 font-xsss text-black-500 mt-0 mb-3 lh-3">{value.description}</h1>
                                                    <figure className="avatar position-absolute w75 z-index-1 left-15" style={{ marginTop: `-40px` }}><img src={`assets/images/user.png`} alt="avater" className="float-right p-1 bg-white rounded-circle w-100 " /></figure>
                                                    <div className="clearfix"></div>
                                                    <h4 className="fw-700 font-xsss mt-3 mb-1">{value.name}</h4>
                                                    <p className="fw-500 font-xsss text-Blue-500 mt-0 mb-3 lh-3">{value.mail}</p>
                                                    
                                                    <span className="position-absolute right-15 top-0 d-flex align-items-center">
                                                        {value.isFollowed ? <button className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white" ref={(el) => {
                                                            if (el) {
                                                                el.style.setProperty('background-color', "#00ff4e", 'important');
                                                            }
                                                        }} style={{ backgroundColor: "#00ff4e" }} onClick={()=>unFollow(value.id)} >UNFOLLOW</button> : <button className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white" onClick={() => follow(value.id)}>FOLLOW</button>}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                    <Load />



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

export default Group;