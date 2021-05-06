import React, {useEffect, useState} from 'react';
// import Slider from "react-slick";
// import AOS from 'aos'
//
// import TypeIt from "typeit";


import axios from 'axios'
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import Footer from "../Footer";

const Index = (props) => {

    // const [scroll, setScroll] = useState(0);
    // const [scroll1, setScroll1] = useState(0);
    // const [scroll2, setScroll2] = useState(0);
    const [selectPc, setSelectPc] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [strength, setStrength] = useState("");
    const [file, setFile] = useState(null);
    const token = "1783115848:AAGVWUkQQ5y4KXtul2YjsBXIPxX9fudAB4U";
    const chatId = "1716710174";


    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     centerPadding: 0,
    //     responsive: [
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                     slidesToShow: 3.5,
    //             }
    //         },
    //         {
    //             breakpoint: 700,
    //             settings: {
    //                 slidesToShow: 2.5,
    //             }
    //         },
    //         {
    //             breakpoint: 500,
    //             settings: {
    //                 slidesToShow: 2.5,
    //             }
    //         },
    //         {
    //             breakpoint: 350,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 300,
    //             settings: {
    //                 slidesToShow: 1.5,
    //             }
    //         }
    //     ]
    // };

    // useEffect(() => {
    //     AOS.init();
    //
    //     console.log(document.getElementById("direction").offsetTop)
    //
    //     document.addEventListener("scroll", (event) => {
    //
    //         if (document.documentElement.scrollTop > 2150 && document.documentElement.scrollTop < 3200){
    //             console.log("keldi")
    //             if (document.documentElement.scrollTop > scroll){
    //                 console.log("keldioooo")
    //                 setScroll2((document.documentElement.scrollTop - 2150) * 0.3)
    //                 setScroll1((2150 - document.documentElement.scrollTop) * 0.3)
    //             } else {
    //                 setScroll1((document.documentElement.scrollTop - 2150) * 0.3)
    //                 setScroll2((2150 - document.documentElement.scrollTop) * 0.3)
    //             }
    //
    //             setScroll(document.documentElement.scrollTop);
    //         }
    //         console.log(document.documentElement.scrollTop)
    //     })
    // }, [])

    const changeFile = (e) => {
        setFile(e.target.files[0]);

    }

    const sendData = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data2 = await fetch('https://api.telegram.org/bot' + token + '/sendMessage',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId, text:
                        "Name : <b>" + e.target.name.value + "</b>" +
                        "\nPhone number: <b>" + e.target.phoneNumber.value + "</b>" +
                        "\nSpecialisation: <b>" + e.target.strength.value + "</b>" +
                        "\nPC: <b>" + (selectPc === 0 ? "Простой PC" : "iMac") + "</b>",
                    parse_mode: "HTML"
                })
            }
        )
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    var formData = new FormData();
                    formData.append('chat_id', chatId);
                    formData.append('document', file);
                    var request = new XMLHttpRequest();
                    request.open('POST', 'https://api.telegram.org/bot' + token + '/sendDocument');
                    request.send(formData);
                    toast.success("Ваши данные успешно отправлены.");
                    e.target.name.value = "";
                    e.target.phoneNumber.value = "";
                    e.target.strength.value = "";
                    setFile(null);
                }
            })
        setIsLoading(false);

    }

    return (
        <>

            <div className="home-main">
                <div className="container-home" data-scroll-section>
                    <div className="hr-box vacancy" data-scroll data-scroll-speed="1">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold fs-24 lh-28 mb-3">В данный момент очень нужны:
                                </h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                • Senior Java Developer (от 20 млн.) <br/>
                                • Senior iOS Dev (Flutter)  (от 20 млн.) <br/>
                                • Senior Android Dev (Flutter)  (от 20 млн.) <br/>
                                • DevOps (от 10 млн.)
                            </h4>
                        </div>

                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>
                    <div className="client-box ml-auto mt-48" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Я лучший. Что вы
                                можете мне предложить?</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>
                    </div>
                    <div className="hr-box mt-48" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">В динамично разви...</h3>
                            <img src="/assets/images/smile-cake.svg" className="mr-3" alt=""/>
                            <img src="/assets/images/smile-coffee.svg" className="mr-3" alt=""/>
                        </div>
                    </div>
                    <div className="hr-box mt-8 w-auto d-inline-block" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Вот что:</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-wrap" data-scroll-section>
                    <div data-scroll data-scroll-speed="1" data-scroll-position="top" className="d-flex flex-nowrap">
                        {/*<Slider {...settings} className="mt-38" >*/}
                        <div className="features-block">
                            <img src="/assets/images/bomb.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Очень достойную заработную
                                плату.</h3>
                        </div>
                        <div className="features-block">
                            <img src="/assets/images/bulb.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Работа с лучшими, над лучшими
                                проектами.</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/corona.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Привилегии во всех финансовых
                                услугах банка. </h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/gift.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Очень большую скидку на страховые
                                продукты.</h3>

                        </div>
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="container-home" data-scroll-section>
                    <div className="hr-box mt-38  w-auto d-inline-block" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">И</h3>
                        </div>
                    </div>
                    <br/>
                    <div className="hr-box mt-8  w-auto d-inline-block" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="hr-box-content">
                            <img src="/assets/images/pepper.png" className="mr-3" alt=""/>
                            <img src="/assets/images/pivo.png" className="mr-3" alt=""/>
                            <img src="/assets/images/women.png" alt=""/>
                        </div>
                    </div>

                    {/*<div className="leave-group mt-48" data-scroll data-scroll-speed="1" data-scroll-position="top">*/}
                    {/*    <h3 className="d-inline-block mb-0 p-3 font-travels-medium">Председатель правления Банка <span> вышел из группы</span>*/}
                    {/*    </h3>*/}
                    {/*</div>*/}

                    <div className="client-box ml-auto mt-48 min-text" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Что Вы задумали?</h3>
                        </div>
                    </div>
                    <div className="client-box ml-auto mt-8" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <img className="p-0 actor-gif" src="/assets/MDT2.gif" alt=""/>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>

                    </div>
                </div>


                <div data-scroll-section id="direction">
                    <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div id="direction">
                            <div className="banner banner-second">
                                <div className="d-flex align-items-center" data-scroll
                                     data-scroll-direction="horizontal" data-scroll-speed="6"
                                     data-scroll-target="#direction">
                                    <div><h1 className="my-0 font-travels-bold lh-28">ПТЫЫЩЬ!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">ПТЫЫЩЬ!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">ПТЫЫЩЬ!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">ПТЫЫЩЬ!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">ПТЫЫЩЬ!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">ПТЫЫЩЬ!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>

                                </div>
                            </div>
                            <div className="banner">
                                <div className="d-flex align-items-center" data-scroll
                                     data-scroll-direction="horizontal" data-scroll-speed="-6"
                                     data-scroll-target="#direction">
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">МОЗГИ!</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-home" data-scroll-section>
                    <div className="hr-box" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">
                                Один банк, одна экосистема.
                            </h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                Представь, ты легко переводишь средства, покупаешь акции на бирже NASDAQ, берешь
                                выгодную ипотеку, и одновременно просматриваешь фильмы заказывая новый диван.
                            </h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>
                </div>
                <div className="carousel-wrap" data-scroll-section>
                    <div className="d-flex flex-nowrap" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        {/*<Slider {...settings} className="mt-sm-4">*/}
                        <div className="features-block">
                            <img src="/assets/images/brilliant.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 white-nowrap tarif">Asaka Mobile</h3>
                        </div>
                        <div className="features-block">
                            <img src="/assets/images/market-place.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif">Маркетплейс</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/deposit.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif">Депозиты и инвестиции</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/music.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif"> Музыка</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/house.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif">Недвижимость</h3>
                        </div>
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="container-home" data-scroll-section>
                    <div className="client-box ml-auto mt-48 mt-mobile" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Ок, заинтересовали. Что требуется от
                                меня?</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>
                    </div>

                    <div className="hr-box" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">Твой банк. Твои люди.</h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                Все просто будь собой. А еще:
                            </h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>
                </div>
                <div className="carousel-wrap mt-3" data-scroll-section>
                    <div className="d-flex flex-nowrap" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        {/*<Slider {...settings} className="mt-sm-4">*/}
                        <div className="features-block">
                            <img src="/assets/images/battery.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Быть усердным</h3>
                        </div>
                        <div className="features-block">
                            <img src="/assets/images/portfile.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Быть грамотным и системным</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/search.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Вникать в суть</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/fire.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">Иногда нужно будет отдохнуть*</h3>
                            <p className="font-travels-demi-bold fs-18 lh-28 m-0"><span>&#8226;</span> Но это не точно
                            </p>

                        </div>
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="container-home" data-scroll-section>
                    <div className="client-box ml-auto mt-64 min-text flex-column align-items-end" data-scroll
                         data-scroll-speed="1" data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Отправь фоточки!</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>

                    </div>

                    <div className="office" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="home-header">
                            <h1 className="mb-0 font-travels-black">
                                УТИ. <br/>
                                УЗНАЙ, ЧТО ТЕБЯ ЖДЕТ В ОФИСЕ.
                            </h1>
                        </div>

                        <div className="d-flex">
                            <img src="/assets/images/office-1.png" className="mr-sm-4" alt=""/>
                            <img src="/assets/images/office-2.png" alt=""/>
                        </div>
                    </div>


                    <div className="client-box ml-auto mt-64" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Ок, я в деле. Что от меня требуется?</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>
                    </div>

                    <div className="hr-box mt-64" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">
                                Супер! Используя данную форму, отправь свою заявку.
                            </h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>

                    <div className="home-header mt-mobile" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <h1 className="mb-0 font-travels-black">
                            ТВОЙ БАНК.
                        </h1>
                        <h1 className="mb-0 font-travels-black">

                            ТВОИ ЛЮДИ.
                        </h1>
                    </div>

                    <form onSubmit={sendData} className="send-form" id="form">
                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <input type="text" className="font-travels-bold fs-24 lh-28" placeholder="Как тебя зовут?"
                                   name="name" required/>
                        </div>
                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <input type="text" className="font-travels-bold fs-24 lh-28"
                                   placeholder="Укажи свой телефон"
                                   name="phoneNumber" required/>
                        </div>
                        <div className="form-dropdown" data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <input type="text" value={strength} autoComplete="off" required
                                   className="font-travels-bold fs-24 lh-28"
                                   onMouseDown={() => setShow(true)} onBlur={() => setTimeout(() => {
                                setShow(false)
                            }, 200)} placeholder="В чем сила, брат? (сестра)"
                                   name="strength"/>
                            <div className="form-dropdown-menu" style={{display: show ? "block" : "none"}}>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("Senior Java Developer (от 20 млн.)")}>
                                    Senior Java Developer (от 20 млн.)
                                </div>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("Senior iOS Dev (Flutter)  (от 20 млн.)")}>
                                    Senior iOS Dev (Flutter) (от 20 млн.)
                                </div>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("Senior Android Dev (Flutter  (от 20 млн.)")}>
                                    Senior Android Dev (Flutter) (от 20 млн.)
                                </div>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("DevOps (от 10 млн.)")}>
                                    DevOps (от 10 млн.)
                                </div>
                            </div>
                        </div>

                        <input type="file" onChange={(e) => {
                            changeFile(e)
                        }} required className="d-none" id="file"/>
                        <div data-scroll
                             data-scroll-speed="1" data-scroll-position="top">
                            <label htmlFor="file" className="font-travels-bold fs-24 lh-28">Прикрепите файл CV</label>
                        </div>

                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            {file &&
                            <div className="file-content">
                                {file.name}
                                <span onClick={() => {
                                    setFile(null);
                                    document.getElementById("file").value = "";
                                }}>&times;</span>
                            </div>}
                        </div>


                        <div className="d-flex form-select mt-64 justify-content-between" data-scroll
                             data-scroll-speed="1" data-scroll-position="top">
                            <div className={`pc-item ${selectPc === 0 && 'selected'}`} onClick={() => setSelectPc(0)}>
                                <img src="/assets/images/pc.png" alt=""/>
                                <h1 className="font-travels-bold fs-24 lh-28">Я человек простой. PC</h1>
                            </div>
                            <div className={`pc-item ${selectPc === 1 && 'selected'}`} onClick={() => setSelectPc(1)}>
                                <img src="/assets/images/imac.png" alt=""/>
                                <h1 className="font-travels-bold fs-24 lh-28">Мне пожалуйста смузи и Mac</h1>
                            </div>
                        </div>

                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <button type="submit" className="btn-submit fs-24 lh-28 font-travels-bold"
                                    disabled={isLoading}>
                                {isLoading ? <span className="spinner-border spinner-border-sm text-white"/> : ""}
                                Отправить
                            </button>
                        </div>
                    </form>

                    <Footer changeState={props.changeState}/>
                </div>

            </div>
        </>
    );
};

export default Index;