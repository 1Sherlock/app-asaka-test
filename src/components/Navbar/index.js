import React from 'react';

const Index = () => {


    return (
        <div className="home-navbar d-flex align-items-center justify-content-between">
           <div>
               <a href="#" data-aos-duration="2000" data-aos="fade-right" >
                   <img src="/assets/images/logo.png" alt=""/>
               </a>
           </div>

            <div>
                <a href="#" className="send-cv text-decoration-none font-travels-bold fs-18 lh-28" data-aos-duration="2000" data-aos="fade-left">
                    Отправить резюме
                </a>
            </div>
        </div>
    );
};

export default Index;