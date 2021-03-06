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
                        "\nPC: <b>" + (selectPc === 0 ? "?????????????? PC" : "iMac") + "</b>",
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
                    toast.success("???????? ???????????? ?????????????? ????????????????????.");
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
                            <h3 className="font-travels-bold fs-24 lh-28 mb-3">?? ???????????? ???????????? ?????????? ??????????:
                                </h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                ??? Senior Java Developer (???? 20 ??????.) <br/>
                                ??? Senior iOS Dev (Flutter)  (???? 20 ??????.) <br/>
                                ??? Senior Android Dev (Flutter)  (???? 20 ??????.) <br/>
                                ??? DevOps (???? 10 ??????.)
                            </h4>
                        </div>

                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>
                    <div className="client-box ml-auto mt-48" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">?? ????????????. ?????? ????
                                ???????????? ?????? ?????????????????????</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">????</p>
                    </div>
                    <div className="hr-box mt-48" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">?? ?????????????????? ??????????...</h3>
                            <img src="/assets/images/smile-cake.svg" className="mr-3" alt=""/>
                            <img src="/assets/images/smile-coffee.svg" className="mr-3" alt=""/>
                        </div>
                    </div>
                    <div className="hr-box mt-8 w-auto d-inline-block" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">?????? ??????:</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-wrap" data-scroll-section>
                    <div data-scroll data-scroll-speed="1" data-scroll-position="top" className="d-flex flex-nowrap">
                        {/*<Slider {...settings} className="mt-38" >*/}
                        <div className="features-block">
                            <img src="/assets/images/bomb.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">?????????? ?????????????????? ????????????????????
                                ??????????.</h3>
                        </div>
                        <div className="features-block">
                            <img src="/assets/images/bulb.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">???????????? ?? ??????????????, ?????? ??????????????
                                ??????????????????.</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/corona.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">???????????????????? ???? ???????? ????????????????????
                                ?????????????? ??????????. </h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/gift.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">?????????? ?????????????? ???????????? ???? ??????????????????
                                ????????????????.</h3>

                        </div>
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="container-home" data-scroll-section>
                    <div className="hr-box mt-38  w-auto d-inline-block" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">??</h3>
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
                    {/*    <h3 className="d-inline-block mb-0 p-3 font-travels-medium">???????????????????????? ?????????????????? ?????????? <span> ?????????? ???? ????????????</span>*/}
                    {/*    </h3>*/}
                    {/*</div>*/}

                    <div className="client-box ml-auto mt-48 min-text" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">?????? ???? ?????????????????</h3>
                        </div>
                    </div>
                    <div className="client-box ml-auto mt-8" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <img className="p-0 actor-gif" src="/assets/MDT2.gif" alt=""/>
                        <p className="font-travels-demi-bold mb-0 mt-3">????</p>

                    </div>
                </div>


                <div data-scroll-section id="direction">
                    <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div id="direction">
                            <div className="banner banner-second">
                                <div className="d-flex align-items-center" data-scroll
                                     data-scroll-direction="horizontal" data-scroll-speed="6"
                                     data-scroll-target="#direction">
                                    <div><h1 className="my-0 font-travels-bold lh-28">????????????!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">????????????!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">????????????!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">????????????!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">????????????!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">????????????!</h1></div>
                                    <div><img src="/assets/images/bomb-lite.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">BOOM!</h1></div>

                                </div>
                            </div>
                            <div className="banner">
                                <div className="d-flex align-items-center" data-scroll
                                     data-scroll-direction="horizontal" data-scroll-speed="-6"
                                     data-scroll-target="#direction">
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/smile-love.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                    <div><img src="/assets/images/brain.png" alt=""/></div>
                                    <div><h1 className="my-0 font-travels-bold lh-28">??????????!</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-home" data-scroll-section>
                    <div className="hr-box" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">
                                ???????? ????????, ???????? ????????????????????.
                            </h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                ??????????????????, ???? ?????????? ???????????????????? ????????????????, ?????????????????? ?????????? ???? ?????????? NASDAQ, ????????????
                                ???????????????? ??????????????, ?? ???????????????????????? ???????????????????????????? ???????????? ?????????????????? ?????????? ??????????.
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
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif">??????????????????????</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/deposit.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif">???????????????? ?? ????????????????????</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/music.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif"> ????????????</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/house.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif">????????????????????????</h3>
                        </div>
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="container-home" data-scroll-section>
                    <div className="client-box ml-auto mt-48 mt-mobile" data-scroll data-scroll-speed="1"
                         data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">????, ????????????????????????????. ?????? ?????????????????? ????
                                ?????????</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">????</p>
                    </div>

                    <div className="hr-box" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">???????? ????????. ???????? ????????.</h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                ?????? ???????????? ???????? ??????????. ?? ??????:
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
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">???????? ????????????????</h3>
                        </div>
                        <div className="features-block">
                            <img src="/assets/images/portfile.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">???????? ?????????????????? ?? ??????????????????</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/search.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">?????????????? ?? ????????</h3>

                        </div>
                        <div className="features-block">
                            <img src="/assets/images/fire.png" alt="" className="w-100"/>
                            <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28">???????????? ?????????? ?????????? ??????????????????*</h3>
                            <p className="font-travels-demi-bold fs-18 lh-28 m-0"><span>&#8226;</span> ???? ?????? ???? ??????????
                            </p>

                        </div>
                        {/*</Slider>*/}
                    </div>
                </div>
                <div className="container-home" data-scroll-section>
                    <div className="client-box ml-auto mt-64 min-text flex-column align-items-end" data-scroll
                         data-scroll-speed="1" data-scroll-position="top">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">?????????????? ??????????????!</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">????</p>

                    </div>

                    <div className="office" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="home-header">
                            <h1 className="mb-0 font-travels-black">
                                ??????. <br/>
                                ??????????, ?????? ???????? ???????? ?? ??????????.
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
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">????, ?? ?? ????????. ?????? ???? ???????? ???????????????????</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">????</p>
                    </div>

                    <div className="hr-box mt-64" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">
                                ??????????! ?????????????????? ???????????? ??????????, ?????????????? ???????? ????????????.
                            </h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>

                    <div className="home-header mt-mobile" data-scroll data-scroll-speed="1" data-scroll-position="top">
                        <h1 className="mb-0 font-travels-black">
                            ???????? ????????.
                        </h1>
                        <h1 className="mb-0 font-travels-black">

                            ???????? ????????.
                        </h1>
                    </div>

                    <form onSubmit={sendData} className="send-form" id="form">
                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <input type="text" className="font-travels-bold fs-24 lh-28" placeholder="?????? ???????? ???????????"
                                   name="name" required/>
                        </div>
                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <input type="text" className="font-travels-bold fs-24 lh-28"
                                   placeholder="?????????? ???????? ??????????????"
                                   name="phoneNumber" required/>
                        </div>
                        <div className="form-dropdown" data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <input type="text" value={strength} autoComplete="off" required
                                   className="font-travels-bold fs-24 lh-28"
                                   onMouseDown={() => setShow(true)} onBlur={() => setTimeout(() => {
                                setShow(false)
                            }, 200)} placeholder="?? ?????? ????????, ????????? (????????????)"
                                   name="strength"/>
                            <div className="form-dropdown-menu" style={{display: show ? "block" : "none"}}>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("Senior Java Developer (???? 20 ??????.)")}>
                                    Senior Java Developer (???? 20 ??????.)
                                </div>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("Senior iOS Dev (Flutter)  (???? 20 ??????.)")}>
                                    Senior iOS Dev (Flutter) (???? 20 ??????.)
                                </div>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("Senior Android Dev (Flutter  (???? 20 ??????.)")}>
                                    Senior Android Dev (Flutter) (???? 20 ??????.)
                                </div>
                                <div className="form-dropdown-menu-item font-travels-bold"
                                     onClick={() => setStrength("DevOps (???? 10 ??????.)")}>
                                    DevOps (???? 10 ??????.)
                                </div>
                            </div>
                        </div>

                        <input type="file" onChange={(e) => {
                            changeFile(e)
                        }} required className="d-none" id="file"/>
                        <div data-scroll
                             data-scroll-speed="1" data-scroll-position="top">
                            <label htmlFor="file" className="font-travels-bold fs-24 lh-28">???????????????????? ???????? CV</label>
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
                                <h1 className="font-travels-bold fs-24 lh-28">?? ?????????????? ??????????????. PC</h1>
                            </div>
                            <div className={`pc-item ${selectPc === 1 && 'selected'}`} onClick={() => setSelectPc(1)}>
                                <img src="/assets/images/imac.png" alt=""/>
                                <h1 className="font-travels-bold fs-24 lh-28">?????? ???????????????????? ?????????? ?? Mac</h1>
                            </div>
                        </div>

                        <div data-scroll data-scroll-speed="1" data-scroll-position="top">
                            <button type="submit" className="btn-submit fs-24 lh-28 font-travels-bold"
                                    disabled={isLoading}>
                                {isLoading ? <span className="spinner-border spinner-border-sm text-white"/> : ""}
                                ??????????????????
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