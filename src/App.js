import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import NavbarMobile from "./components/NavbarMobile";
import LocomotiveScroll from 'locomotive-scroll';
import {useEffect} from "react";
import { ToastContainer } from 'react-toastify';


import React, {Component} from 'react';
import ModalContent from "./components/ModalContent";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });

        document.addEventListener("keyup", (event) => {
            console.log("keldi")
            if (event.keyCode === 27){
                this.setState({
                    show: false
                })
            }
        })
    }

    componentWillUnmount() {
        this.scroll.destroy();
    }

    render() {

        const changeState = () => {
            this.setState({
                show: !this.state.show
            })
        }
        return (
            <div data-scroll-container id="app">
                <div className="container-home">
                    <Navbar/>
                </div>
                <div className="container-home">
                    <NavbarMobile/>

                </div>
                <div className="container-home">

                    <Header/>
                </div>

                <Main changeState={changeState}/>

                <ToastContainer />

                <div onClick={changeState} className={`modal-container-back ${this.state.show ? 'modal-container-back-active' : ''}`} />
                <div className={`modal-container ${this.state.show ? 'modal-container-active' : ''}`} id="modal-container">
                    <ModalContent changeState={changeState}/>
                </div>
            </div>
        );
    }
}

export default App;

