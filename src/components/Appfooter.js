import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Appfooter extends Component {
    render() {
        return (
            <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
                <Link to="/connections" className="nav-content-bttn nav-center"><i className="feather-home"></i></Link>
                <Link to="/defaultgroup" className="nav-content-bttn nav-center"><i className="feather-zap"></i></Link>
                <Link to="/profile" className="nav-content-bttn nav-center"><i className="feather-user"></i></Link>
                <Link to="/setting" className="nav-content-bttn"><i className="feather-settings"></i></Link>
            </div>        
        );
    }
}

export default Appfooter;