import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import Darkbutton from '../components/Darkbutton';

class Header extends Component {
    state = {
        isOpen: false,
        isActive: false,
        isNoti: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    toggleActive = () => this.setState({ isActive: !this.state.isActive });
    toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

    render() {
        const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
        const searchClass = `${this.state.isActive ? " show" : ""}`;

        return (
            <div className="nav-header bg-white shadow-xs border-0">
                <div className="nav-top">
                    <Link to="/"><i className="feather-zap text-success display2-size me-3 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">DBC </span> </Link>
                </div>
                <Darkbutton/>
                <Link to="/profile" className="p-0 ms-3 menu-icon"><img src="assets/images/user.png" alt="user" className="w40 mt--1" /></Link>

                <nav className={`navigation scroll-bar ${navClass}`}>
                    <div className="container ps-0 pe-0">
                        <div className="nav-content">
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                                <div className="nav-caption fw-600 font-xssss text-grey-500">Feeds</div>
                                <ul className="mb-1 top-content">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/connections" className="nav-content-bttn open-font"><i className="feather-zap btn-round-md bg-red-gradiant me-3"></i><span>My Connections</span></Link></li>             
                                    <li><Link to="/map" className="nav-content-bttn open-font"><i className="feather-map btn-round-md bg-red-gradiant me-3"></i><span>My Map </span></Link></li>                  
                                    <li><Link to="/defaultgroup" className="nav-content-bttn open-font"><i className="feather-zap btn-round-md bg-red-gradiant me-3"></i><span>Popular Groups </span></Link></li>          
                                </ul>
                            </div>
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                                <ul className="mb-1">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/profile" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="feather-user btn-round-md bg-primary-gradiant me-3"></i><span>My Profile</span></Link></li>
                                    <li><Link to="/setting" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="feather-settings btn-round-md bg-primary-gradiant me-3"></i><span>Setting</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <div className={`app-header-search ${searchClass}`}>
                    <form className="search-form">
                        <div className="form-group searchbox mb-0 border-0 p-1">
                            <input type="text" className="form-control border-0" placeholder="Search..." />
                            <i className="input-icon">
                                <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                            </i>
                            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                                <i className="ti-close font-xs" onClick={this.toggleActive}></i>
                            </span>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Header;