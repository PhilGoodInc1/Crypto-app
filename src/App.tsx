import './App.css';
import React from "react";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


function App() {


    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
