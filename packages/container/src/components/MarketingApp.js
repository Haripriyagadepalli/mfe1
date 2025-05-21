import {Mount} from 'marketing/MarketingApp';
import React from 'react'
//import {createRef} from 'react'

export default class newApp extends React.Component{
    constructor(props){
        super(props)
        this.myreference=React.createRef();
    }
    componentDidMount(){
       Mount(this.myreference.current)
    }
    render(){
        return(
            <div id='marketing' ref={this.myreference}></div>
        )
    }
} 