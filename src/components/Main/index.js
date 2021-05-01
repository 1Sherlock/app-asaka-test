import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import AOS from 'aos'
const Index = () => {

    const [scroll, setScroll] = useState(0);
    const [scroll1, setScroll1] = useState(0);
    const [scroll2, setScroll2] = useState(0);
    const [selectPc, setSelectPc] = useState(0);
    const [show, setShow] = useState(false);
    const [strength, setStrength] = useState("");

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                        slidesToShow: 3.5,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1.5,
                }
            }
        ]
    };

    useEffect(() => {
        AOS.init();

        console.log(document.getElementById("direction").offsetTop)

        document.addEventListener("scroll", (event) => {

            if (document.documentElement.scrollTop > 2150 && document.documentElement.scrollTop < 3200){
                console.log("keldi")
                if (document.documentElement.scrollTop > scroll){
                    console.log("keldioooo")
                    setScroll2((document.documentElement.scrollTop - 2150) * 0.3)
                    setScroll1((2150 - document.documentElement.scrollTop) * 0.3)
                } else {
                    setScroll1((document.documentElement.scrollTop - 2150) * 0.3)
                    setScroll2((2150 - document.documentElement.scrollTop) * 0.3)
                }

                setScroll(document.documentElement.scrollTop);
            }
            console.log(document.documentElement.scrollTop)
        })
    }, [])


    return (
        <>

            <div className="home-main">
                <div className="container-home">
                    <div className="hr-box" data-aos="fade-up">
                        <div className="hr-box-content" >
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">Привет, мы ищем лучших специалистов.</h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">Меняем рынок. Создаем свои
                                правила.</h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>
                    <div className="client-box ml-auto mt-64" data-aos="fade-up">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">Я лучший. Что вы
                                можете мне предложить?</h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">Я работал с клиентами из РФ, Европы и
                                США, Марсианами и Орангутангами. Фи.</h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>
                    </div>
                    <div className="hr-box mt-64" data-aos="fade-up">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">Крутой вызов, крутые кейсы, проф.
                                рост!</h3>
                            <h4 className="font-travels-medium mb-3 fs-24 lh-28">В динамично разви...</h4>
                            <img src="/assets/images/smile-cake.svg" className="mr-3" alt=""/>
                            <img src="/assets/images/smile-coffee.svg" className="mr-3" alt=""/>
                            <img src="/assets/images/smile-1.svg" alt=""/>
                        </div>
                    </div>
                    <div className="hr-box mt-3 w-auto d-inline-block" data-aos="fade-up">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Вот что:</h3>
                        </div>
                    </div>

                    <div>
                        <Slider {...settings} className="mt-38" >
                            <div className="features-block" >
                                <img src="/assets/images/bomb.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos="fade-up">Очень достойную заработную
                                    плату.</h3>
                            </div>
                            <div className="features-block">
                                <img src="/assets/images/bulb.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos="fade-up">Работа с лучшими, над лучшими
                                    проектами.</h3>

                            </div>
                            <div className="features-block">
                                <img src="/assets/images/corona.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos="fade-up">Привелегии во всех финансовых
                                    услугах банка. </h3>

                            </div>
                            <div className="features-block">
                                <img src="/assets/images/gift.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos="fade-up">Очень большую скидку на страховые
                                    продукты.</h3>

                            </div>
                            <div className="features-block">
                                <img src="/assets/images/gift.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos="fade-up">Очень большую скидку на страховые
                                    продукты.</h3>
                            </div>
                        </Slider>
                    </div>

                    <div className="hr-box mt-38  w-auto d-inline-block" data-aos="fade-right">
                        <div className="hr-box-content">
                            <img src="/assets/images/pepper.png" className="mr-3" alt=""/>
                            <img src="/assets/images/pivo.png" className="mr-3" alt=""/>
                            <img src="/assets/images/women.png" alt=""/>
                        </div>
                    </div>

                    <div className="leave-group mt-64" data-aos="fade-up">
                        <h3 className="d-inline-block mb-0 p-3 font-travels-medium">Председатель правления Банка <span> вышел из группы</span>
                        </h3>
                    </div>

                    <div className="client-box ml-auto mt-64 min-text" data-aos="fade-left">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Что Вы задумали?</h3>
                        </div>
                    </div>
                    <div className="client-box ml-auto mt-3" data-aos="fade-left">
                        <img className="p-0" src="/assets/images/actor.png" alt=""/>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>

                    </div>

                </div>

                <div id="direction">
                    <div className="banner banner-second" >
                        <div className="d-flex align-items-center" style={{transform: `translateX(${scroll1}px)`}}>
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
                        <div className="d-flex align-items-center" style={{transform: `translateX(${scroll2}px)`}}>
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

                <div className="container-home">
                    <div className="hr-box" data-aos="fade-right" data-aos-duration="2000">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">Превратить банк в экосистему</h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                Представь что ты легко переводишь средства, покупаешь акции на бирже NASDAQ, берешь
                                выгодную ипотеку, и одновременно слушаешь музыку заказывая новый диван.
                            </h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>


                    <div>
                        <Slider {...settings} className="mt-sm-4">
                            <div className="features-block">
                                <img src="/assets/images/brilliant.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 white-nowrap tarif" data-aos-duration="2000" data-aos="fade-up">Asaka Mobile</h3>
                            </div>
                            <div className="features-block">
                                <img src="/assets/images/market-place.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif" data-aos-duration="2000" data-aos="fade-up">Маркетплейс</h3>

                            </div>
                            <div className="features-block">
                                <img src="/assets/images/deposit.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif" data-aos-duration="2000" data-aos="fade-up">Депозиты и инвестиции</h3>

                            </div>
                            <div className="features-block">
                                <img src="/assets/images/music.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif" data-aos-duration="2000" data-aos="fade-up"> Музыка</h3>

                            </div>
                            <div className="features-block">
                                <img src="/assets/images/house.png" alt="" className="w-100" data-aos="fade-down"/>
                                <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28 tarif" data-aos-duration="2000" data-aos="fade-up">Недвижимость</h3>
                            </div>
                        </Slider>
                    </div>


                    <div className="client-box ml-auto mt-64 mt-mobile" data-aos-duration="2000" data-aos="fade-left">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Ок, заинтересовали. Что требуется от
                                меня?</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>
                    </div>

                    <div className="hr-box" data-aos-duration="2000" data-aos="fade-right">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">Твой банк. Твои люди.</h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                Все просто будь собой. А еще:
                            </h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                    </div>


                   <div>
                       <Slider {...settings} className="mt-sm-4">
                           <div className="features-block">
                               <img src="/assets/images/battery.png" alt="" className="w-100" data-aos-duration="2000" data-aos="fade-down"/>
                               <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos-duration="2000" data-aos="fade-up">Быть усердным.</h3>
                           </div>
                           <div className="features-block">
                               <img src="/assets/images/portfile.png" alt="" className="w-100" data-aos-duration="2000" data-aos="fade-down"/>
                               <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos-duration="2000" data-aos="fade-up">Быть грамотным и системным.</h3>

                           </div>
                           <div className="features-block">
                               <img src="/assets/images/search.png" alt="" className="w-100" data-aos-duration="2000" data-aos="fade-down"/>
                               <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos-duration="2000" data-aos="fade-up">Вникать в суть. </h3>

                           </div>
                           <div className="features-block">
                               <img src="/assets/images/fire.png" alt="" className="w-100" data-aos-duration="2000" data-aos="fade-down"/>
                               <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos-duration="2000" data-aos="fade-up">Отдыхать. Нельзя заставлять себя
                                   работать.</h3>

                           </div>
                           <div className="features-block">
                               <img src="/assets/images/fire.png" alt="" className="w-100" data-aos-duration="2000" data-aos="fade-down"/>
                               <h3 className="mt-4 mb-0 font-travels-bold fs-24 lh-28" data-aos-duration="2000" data-aos="fade-up">Отдыхать. Нельзя заставлять себя
                                   работать.</h3>

                           </div>
                       </Slider>
                   </div>

                    <div className="client-box ml-auto mt-64 min-text flex-column align-items-end" data-aos-duration="2000" data-aos="fade-left">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Отправь фоточки!</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>

                    </div>

                    <div className="office" data-aos-duration="2000" data-aos="fade-up">
                        <div className="home-header">
                            <h1 className="mb-0 font-travels-bold">
                                ШАЛУН. <br/>
                                УЗНАЙ, ЧТО ТЕБЯ ЖДЕТ В ОФИСЕ.
                            </h1>
                        </div>

                       <div className="d-flex">
                           <img src="/assets/images/office-1.png" className="mr-sm-4" alt="" data-aos-duration="2000" data-aos="fade-left"/>
                           <img src="/assets/images/office-2.png" alt="" data-aos-duration="2000" data-aos="fade-left"/>
                       </div>
                    </div>


                    <div className="client-box ml-auto mt-64" data-aos-duration="2000" data-aos="fade-left">
                        <div className="client-box-content">
                            <h3 className="font-travels-bold mb-0 fs-24 lh-28">Ок, я в деле. Что от меня требуется?</h3>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3">Вы</p>
                    </div>

                    <div className="hr-box mt-108" data-aos-duration="2000" data-aos="fade-right">
                        <div className="hr-box-content">
                            <h3 className="font-travels-bold mb-3 fs-24 lh-28">
                                Супер! Используя данную форму, отправь свою заявку.
                            </h3>
                            <h4 className="font-travels-medium mb-0 fs-24 lh-28">
                                Пожалуйста, вводи поля правильно.
                                <br/><br/>
                                Мы получаем много заявок, можем долго отвечать на твои сообщения.
                            </h4>
                        </div>
                        <p className="font-travels-demi-bold mb-0 mt-3 ml-4">HR Asaka Bank</p>
                        <img src="/assets/images/hand-down.png" alt="" className="hand-down"/>
                    </div>

                    <div className="home-header mt-mobile" data-aos-duration="2000" data-aos="fade-up">
                        <h1 className="mb-0 font-travels-bold">
                            ТВОЙ БАНК. <br/>
                            ТВОИ ЛЮДИ.
                        </h1>
                    </div>

                    <form action="#" className="send-form">
                        <input type="text" className="font-travels-bold fs-24 lh-28" placeholder="Как тебя зовут?"
                               name="name" data-aos-duration="2000" data-aos="fade-up"/>
                        <input type="text" className="font-travels-bold fs-24 lh-28" placeholder="Укажи свой телефон"
                               name="phoneNumber" data-aos-duration="2000" data-aos="fade-up"/>
                        <div className="form-dropdown" >
                            <input type="text" value={strength} className="font-travels-bold fs-24 lh-28" onMouseDown={() => setShow(true)} onBlur={() => setTimeout(() => {setShow(false)}, 200)} placeholder="В чем ты силен?"
                                   name="strength" data-aos-duration="2000" data-aos="fade-up"/>
                            <div className="form-dropdown-menu" style={{display: show? "block": "none"}}>
                                <div className="form-dropdown-menu-item font-travels-bold" onClick={() => setStrength("Item 1")}>Item 1</div>
                                <div className="form-dropdown-menu-item font-travels-bold" onClick={() => setStrength("Item 2")}>Item 2</div>
                                <div className="form-dropdown-menu-item font-travels-bold" onClick={() => setStrength("Item 3")}>Item 3</div>
                                <div className="form-dropdown-menu-item font-travels-bold" onClick={() => setStrength("Item 4")}>Item 4</div>
                            </div>
                        </div>

                        <input type="file" className="d-none" id="file"/>
                        <label htmlFor="file" className="font-travels-bold fs-24 lh-28" data-aos-duration="2000" data-aos="fade-up">Прикрепите файл CV</label>

                        <div className="d-flex form-select mt-64 justify-content-between">
                            <div className={`pc-item ${selectPc === 0 && 'selected'}`}  onClick={() => setSelectPc(0)} >
                                <img src="/assets/images/pc.png" alt=""/>
                                <h1 className="font-travels-bold fs-24 lh-28">Я человек простой, PC</h1>
                            </div>
                            <div className={`pc-item ${selectPc === 1 && 'selected'}`} onClick={() => setSelectPc(1)} >
                                <img src="/assets/images/imac.png" alt=""/>
                                <h1 className="font-travels-bold fs-24 lh-28">Мне пожалуйста, смузи и Mac</h1>
                            </div>
                        </div>

                        <button type="submit" className="btn-submit fs-24 lh-28 font-travels-bold" data-aos-duration="2000" data-aos="fade-up">Отправить</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Index;