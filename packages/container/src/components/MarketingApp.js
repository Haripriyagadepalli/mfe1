import {Mount} from 'marketing/MarketingApp';
import React from 'react'
import {createRef} from 'react'

export default class newApp extends React.Component{
    Constructor(props){
        
        this.ref=createRef();
    }
    componentDidMount(){
        Mount(this.ref.current)
    }
    render(){
        return(
            <div ref={this.ref}></div>
        )
    }
} 