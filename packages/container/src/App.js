import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from './components/MarketingApp'
import Header from'./components/Header'
export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                 <Header/>
                 <MarketingApp/>
            </div>
           </BrowserRouter>
        )
    }
} 