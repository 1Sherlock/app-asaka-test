import React from 'react';


const Index = () => {
    return (
        <div className="home-navbar d-flex align-items-center justify-content-between">
           <div>
               <a href="#">
                   <img src="/assets/images/logo.png" alt=""/>
               </a>
           </div>

            <div>
                <a href="#" className="send-cv text-decoration-none font-travels-bold fs-18 lh-28">
                    Отправить резюме
                </a>
            </div>
        </div>
    );
};

export default Index;