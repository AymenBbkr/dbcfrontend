import React, {useState, Fragment } from "react";
import {useHistory} from "react-router-dom";
import APIService from "../components/APIService";





function Login() {
   let history = useHistory(); 

   const [username,setUsername]=useState('');   
   const [password,setPassword]=useState(''); 
   const [error, setError]  = useState('')

   
 
   const  login = async () => {
        await fetch(APIService.baseUrl+'/rest-auth/login/', {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                

            },
            body:JSON.stringify({username, password})
        })
            .then(resp => resp.json())
            .then(result => {
                if(result.key === undefined){
                setError("Invalid username or password");
                return 
            }
            localStorage.setItem('mytoken', result.key)
            history.push('/connections')
            
        })
        
    }

    return (
            <Fragment> 
                <div className="main-wrap">
              
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                            <a href="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">DBC </span> </a>
            
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
                                        <h2 className="fw-700 display1-size display2-md-size mb-3">Login into <br />your account</h2>
                                        <br/>

                                        {
                                        error ?
                                            <div className = "alert alert-warning alert-dismissible" role="alert">  
                                                <p>{error}</p>
                                            </div>
                                            : 
                                            null
                                        }
                                        <form>
                                            
                                            <div className="form-group icon-input mb-3">
                                                <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                                <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" 
                                                name="username" placeholder="Please Enter Username" value= {username} onChange = {evt => setUsername(evt.target.value)}/>                        
                                            </div>
                                            <div className="form-group icon-input mb-1">
                                                <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                                name="password" placeholder="Please Enter Password" value= {password} onChange = {evt => setPassword(evt.target.value)}/>
                                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                            </div>
                                            <div className="form-check text-left mb-3">
                                                <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                                                <label className="form-check-label font-xsss text-grey-500">Remember me</label>
                                                <a href="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a>
                                            </div>
                                        </form>
                                        
                                        <div className="mb-3 text-left">
                                            <button onClick = {function(event) {login(); }} className = "btn btn-success">Login</button>
                                            <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Dont have account <a href="/register" className="fw-700 ms-1">Register</a></h6>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        
                    </div>
                </div>
            </Fragment>
    );
 }  


export default Login;