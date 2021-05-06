import React from 'react';
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div className="navbar-mobile pt-4" data-scroll-section data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-position="top" >
            <Link to="/"><img src="/assets/images/logo-mobile.svg" alt=""/></Link>
        </div>
    );
};

export default Index;