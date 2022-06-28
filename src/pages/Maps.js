import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';

import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const eventList = [
    {
        imageUrl: 'hotel.png',
        title: 'Right here Right Now -  Comedy ',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Open Mic-Stand up Comedy and Poetry',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Mohd Suhels Guide to the Galaxy',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Charlotte De Witte India Tour',
        location: 'Goa, Mumbai',
        date: '31',
        month: 'APR',
    },
    {
        imageUrl: 'hotel.png',
        title: 'A Stand-up Comedy Show by Rahul',
        location: 'Goa, Mumbai',
        date: '04',
        month: 'MAR',
    },
    {
        imageUrl: 'hotel.png',
        title: 'Sunburn Holi Weekend 2021  ',
        location: 'Goa, Mumbai',
        date: '22',
        month: 'FEB',
    },
]

class Maps extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card w-100 border-0 shadow-none rounded-xxl border-0 mb-3 overflow-hidden ">
                                        <div style={{ height: '400px', width: '100%' }}>
                                            <GoogleMapReact
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                            >
                                            <AnyReactComponent
                                                lat={59.955413}
                                                lng={30.337844}
                                                text="My Marker"
                                            />
                                            </GoogleMapReact>
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

export default Maps;