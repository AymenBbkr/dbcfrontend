import React, { Fragment, useEffect, useState } from "react";
import APIService from "../components/APIService";
import MyHead from "../components/MyHead";
import Popupchat from "../components/Popupchat";
import { useParams } from "react-router-dom";
import Load from '../components/Load';

function UserProfile() {
    const token = localStorage.getItem("mytoken");
     
    let params = useParams();
    console.log(params.id);
    console.log(token);
    const [clientList, setClientList] = useState([]);
    const [profile, setProfile] = useState();
    const [refresh, setRefresh] = useState(0);
    

    const follow = async (id) => { 
        console.log(id)
        console.log(token)
        await APIService.addConnection(token, id);
        setRefresh(state=>state+1);
    }
    const unFollow = async (id) => {
        await APIService.removeConnection(token, id);
        setRefresh(state=>state+1);
    }
    useEffect(async () => {
        const data = await APIService.getClientDetails(token, params.id);
        setProfile(data[0])
        console.log(data[0])
        console.log(params)
    }, [refresh,token])


    return (
        <Fragment>
            <MyHead />
            <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="middle-wrap">
                            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                                </div>
                                <div className="card-body p-lg-5 p-4 w-120 border-0 ">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 text-center">
                                            <figure className="avatar ms-auto me-auto mb-0 mt-2 w100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFLT15neUzGtgzKmg1jerPbKa5iiV7-OlpA&usqp=CAU" alt="avater" className="shadow-sm rounded-3 w-100" /></figure>
                                            <h2 className="fw-700 font-xs text-red-900 mt-3">{`${profile?.firstname} ${profile?.lastname}`}</h2>
                                            <h2 className="fw-700 font-xs text-red-900 mt-3">{profile?.description}</h2>
                                            <h2 className="fw-700 font-xs text-red-900 mt-3">{profile?.mail} </h2>
                                            <h2 className="fw-700 font-xs text-red-900 mt-3">phone: {profile?.phone}</h2>
                                            
                                            
                           
                                            <ul className="d-flex align-items-center justify-content-center mt-1">
                                                
                                                {
                                                    profile?.links?.map?.(item => <li>
                                                       <li className="m-1"><a href={item.value} target="_blank" ><img width={"60px"} height={"60px"}  src={`${item.image}`} alt="icon" /></a></li>
                                                    </li>)
                                                }
                                            </ul>
                                            

                                            </div>

                                </div>
                                <span className="position-absolute middle-25  d-flex align-items-center">
                                                        {profile?.isFollowed ? <button className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white" ref={(el) => {
                                                            if (el) {
                                                                el.style.setProperty('background-color', "#00ff4e", 'important');
                                                            }
                                                        }} style={{ backgroundColor: "#00ff4e" }} onClick={()=>unFollow(profile?.id)} >UNFOLLOW</button> : <button className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white" onClick={() => follow(profile?.id)}>FOLLOW</button>}
                                            </span>
                                
                        </div>
                    </div>

                    </div> 
            </div>

        </div>
            </div >
        <Popupchat />
        </Fragment >
    );
}


export default UserProfile;