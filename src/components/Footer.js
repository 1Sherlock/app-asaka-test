import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ModalContent from "./ModalContent";

const Footer = (props) => {
    const [show, setShow] = useState(false);


    return (
        <div className="footer mt-48" data-scroll-section-id="form" id="footer">
            <p className="agreement font-travels-demi-bold fs-18 lh-28" data-scroll data-scroll-speed="1" data-scroll-position="top">Продолжая, <span onClick={props.changeState}>вы принимаете Политику обработки персональных данных.</span></p>
            <p className="info font-travels-demi-bold mt-64" data-scroll data-scroll-speed="1" data-scroll-position="top">©2021. АО "AsakaBank". Твой банк. Твои люди. <br/>
                78 1476565 (IT отдел, внут. 1827) </p>
            <p className="django font-travels-medium mt-3" data-scroll data-scroll-speed="1" data-scroll-position="top">
                * Django Unchained. A Band Apart. Columbia Pictures. <a href="https://giphy.com" target="_blank">Giphy.com</a> <br/>
                Сайт не преследует коммерческие цели. Все права защищены.
            </p>


        </div>
    );
};

export default Footer;