import { Component } from "react";

export class Clock extends Component{
    constructor()
    {
        super();
        this.state={
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString()
        }
    }
    render(){
        return(
            <div>
                <div>Date is {this.state.date}</div>
                <div>Time is {this.state.time}</div>
            </div>
        )
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
        },1000)
    }
}