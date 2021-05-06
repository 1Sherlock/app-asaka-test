import React from 'react';
import {Link} from "react-router-dom";

const Index = (props) => {


    return (
        <div className="home-navbar d-flex align-items-center justify-content-between" data-scroll-section id="header">
           <div data-scroll data-scroll-speed="-8" data-scroll-position="top" data-scroll-target="#header" >
               <Link to='/' >
                   <img src="/assets/images/logo.png" alt="" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-position="top" data-scroll-target="#header"/>
               </Link>
           </div>

            <div data-scroll data-scroll-speed="-8" data-scroll-position="top" data-scroll-target="#header">
                <a href="#form"  data-scroll-to className="send-cv text-decoration-none font-travels-bold fs-18 lh-28">
                    Отправить резюме
                </a>
            </div>
        </div>
    );
};

export default Index;