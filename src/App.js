import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import NavbarMobile from "./components/NavbarMobile";


function App() {
    return (
        <div className="App">
            <div className="container-home">
                <Navbar/>
                <NavbarMobile/>
                <Header/>
            </div>
            <Main/>
        </div>
    );
}

export default App;
