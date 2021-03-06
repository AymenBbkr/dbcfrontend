import React, {useState, Fragment } from "react";
import APIService from "../components/APIService";
import {useHistory} from "react-router-dom";

function Register() {
    
        let history = useHistory();

        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password1, setPassword1] = useState('')
        const [password2, setPassword2] = useState('')
        
        
      

        const register = () => {
            
            APIService.RegisterUser({username, email, password1, password2})
            .then(() => {
              
            
            })
            .catch(error => console.log(error))
        

        }


        return (
            <Fragment> 
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                            <a href="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">DBC </span> </a>
                            <button className="nav-menu me-0 ms-auto"></button>
            
                            <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                            <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                        style={{backgroundImage: `url("https://www.pngkit.com/png/full/929-9293815_picture-download-background-asheville-recovery-residence-blue-gradient.png")`}}></div>
                        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                <div className="card-body rounded-0 text-left">
                                    <h2 className="fw-700 display1-size display2-md-size mb-4">Create <br />your account</h2>                        
                                    <form>
                                        
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Name" 
                                            value={username} onChange = {evt => setUsername(evt.target.value)}  />                        
                                        </div>
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address" 
                                            value={email} onChange = {evt => setEmail(evt.target.value)}  />                        
                                        </div>
                                        <div className="form-group icon-input mb-3">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Password"
                                            value={password1} onChange = {evt => setPassword1(evt.target.value)}   />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-group icon-input mb-1">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Confirm Password" 
                                            value={password2} onChange = {evt => setPassword2(evt.target.value)}/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-check text-left mb-3">
                                            <input type="checkbox" className="form-check-input mt-2" id="exampleCheck2" />
                                            <label className="form-check-label font-xsss text-grey-500">Accept Term and Conditions</label>
                                            
                                        </div>
                                    </form>
                                    
                                    <div className="col-sm-12 p-0 text-left">
                                        <button onClick ={function(event) {register(); history.push('/login')}} className="btn btn-success">Register</button>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <a href="/login" className="fw-700 ms-1">Login</a></h6>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );

}

export default Register;