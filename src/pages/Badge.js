import React, { Component, Fragment, useEffect, useState } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Pagetitle from '../components/Pagetitle';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import APIService from "../components/APIService";
import { useHistory } from "react-router-dom";



const badgeList = [

    {
        imageUrl: 'user.png',
        name: 'Aliqa Macale',
        email: 'support@gmail.com',
        connections: '55.7k',
        follower: '105k',
        following: '71k',
        badge1: 'top-student.svg',
        badge2: 'onfire.svg',
        badge3: 'challenge-medal.svg',
        badge4: 'fast-graduate.svg',
        links: [{
            "clientLinkId": 3,
            "type": "Personal",
            "value": "www.facebook2.com",
            "title": "Facebook"
        },]
    },

]

function Badge() {
    const token = localStorage.getItem("mytoken");
    let history = useHistory();
    const [connectionList, setConnectionList] = useState([]);
    const [search, setSearch] = useState(null);
    const [refresh, setRefresh] = useState(0);

    const unFollow = async (id) => {
        await APIService.removeConnection(token, id);
        setRefresh(state=>state+1);
    }
    useEffect(async () => {
        const data = await APIService.getConnections(token);
        if (data.detail=="Invalid token.") 
        {
            history.push("/login")
        } else {
            setConnectionList(data)
        }
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

                                <Pagetitle title="My Connections" onSearch={(v) => setSearch(v)} />

                                <div className="row ps-2 pe-1">
                                    {connectionList.length === 0 ? <p>pas de connexions</p> : connectionList?.filter?.(item => search ? item.name.match(search) : true).map((value, index) => (

                                        <div key={index} className="col-md-4 col-sm-6 pe-2 ps-2">
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                                <div className="card-body d-block w-100 p-4 text-center">
                                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1"><img src={`assets/images/user.png`} alt="avater" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                                    <div className="clearfix"></div>
                                                    <h4 className="fw-700 font-xss mt-3 mb-0">{value.name} </h4>
                                                    <p className="fw-500 font-xssss text-black-500 mt-0 mb-3">{value.mail}</p>
                                                    <p className="fw-500 font-xsss text-green-500 mt-0 mb-3">{value.description}</p>
                                                    <ul className="d-flex align-items-center justify-content-center mt-1">
                                                        <li className="m-2"><h4 className="fw-700 font-sm">{50} <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Connections</span></h4></li>
                                                        <li className="m-2"><h4 className="fw-700 font-sm">{0} <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Follower</span></h4></li>
                                                        <li className="m-2"><h4 className="fw-700 font-sm">{0} <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">Followings</span></h4></li>
                                                    </ul>
                                                    <ul className="d-flex align-items-center justify-content-center mt-1">

                                                        {value.links.map(item => <li className="m-1"><a href={item.value} target="_blank" ><img width={"40px"} height={"40px"}  src={`${item.image}`} alt="icon" /></a></li>)}
                                                    </ul>
                                                    <button  onClick={()=>unFollow(value.client)}  className="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white">FOLLOWED</button>
                                                </div>
                                            </div>
                                        </div>

                                    ))}


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

export default Badge;