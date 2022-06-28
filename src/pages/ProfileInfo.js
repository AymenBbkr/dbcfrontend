import React, { Fragment, useEffect, useState } from "react";
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Pagetitle from '../components/Pagetitle';
import { useHistory } from "react-router-dom";

import { useParams } from 'react-router-dom'
import APIService from "../components/APIService";

function ProfileInfo() {
  
    const [profile, setProfile] = useState();

    useEffect(async () => {
        const data = await APIService.getClientDetails("1f9c71fd7ee381ccc1311dce65b1a3110ead54d1", 1);
        setProfile(data)
        console.log(data)
    }, [])

    return (
        <Fragment>
            <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
            <h3> {profile?.firstname} </h3>
              <h3> {profile?.lastname} </h3>
              <h3> {profile?.country}</h3>
              <h3> {profile?.town}</h3>
              <h3> {profile?.phone}</h3>
              <h3> {profile?.mail}</h3>
              <ul>
                {
                profile?.links?.map?.(item => <li>
                    {item.value}
                </li>)
                }
            </ul>

            </div>
           
                                
       
              
           
                   
            
        </Fragment>
    );

}

export default ProfileInfo;


