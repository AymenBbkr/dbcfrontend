import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';

import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import APIService from "../components/APIService";

function Socialaccount() {
    const token = localStorage.getItem("mytoken");

    const [links, setLinks] = useState([]);
    const [userLinks, setUserLinks] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(async () => {
        const data = await APIService.getLinks(token);
        console.log(data)
        setLinks(data || [])
        const datalinks = await APIService.getUserLink(token);
        setUserLinks(datalinks|| [])
    }, [token, refresh])

    const handleChangeForm = (event) => {
        const linkId = event.target.name;
        const value = event.target.value;
        setUserLinks(prev => {
            const newLinks = [...prev]
            const item = newLinks.find(x => x.link == [event.target.name]);
            if (item) { item.value = value }
            else { newLinks.push({ link: linkId, value: value }) }
            return newLinks
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = await APIService.createOrUpdateUserLinks(token, userLinks);
        setRefresh(prev => prev++)
    }

    return (
        <Fragment>
            <div className="main-wrapper">
                <Header />
                <Leftnav />
                <div className="main-content bg-lightblue theme-dark-bg right-chat-active">

                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                    <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                                        <Link to="/setting" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-white"></i></Link>
                                        <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Social Network</h4>
                                    </div>
                                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                                        <form onSubmit={onSubmit}>



                                            <div className="row">
                                                {links.map((item) => <div className="col-lg-6 mb-3">
                                                    <div className="form-group">
                                                        <label className="mont-font fw-600 font-xsss">{item.title}</label>
                                                        <input type="text-black" name={item.id} value={userLinks?.find(linkObject => linkObject.link == item.id)?.value} onChange={handleChangeForm} className="form-control" />
                                                    </div>
                                                </div>)}




                                                <div className="col-lg-12 mb-0 mt-2">
                                                    <button type="submit" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">Save</button>
                                                </div>
                                            </div>
                                        </form>
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

export default Socialaccount;