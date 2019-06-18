import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';
const Header = () => {
    return (
        <div className=" ui econdary pointing menu">
            <Link to="/" className="item">
                Amazing Streamer
            </Link>
            
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;