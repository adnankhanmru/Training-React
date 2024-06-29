import React, { Component } from "react";

class Counter extends Component{
    
    constructor(){
        super()
        this.state={
            c:0
        }
    }
    increment=()=>{
        this.setState({
            c:this.state.c+1
        })
        
    }
    decrement=()=>{
        this.setState({
            c:this.state.c-1
        })
    }


    render(){
        return(
            <div className="container p-5 w-50 m-5 border border-info bg-dark text-light">
                <h2>Counter Application</h2>
            <div>
                <button onClick={this.increment} class="btn btn-outline-light">Increment</button>
                <button className="mt-2" onClick={this.decrement} class="btn btn-outline-light">Decrement</button>
            </div>
            <div class="badge text-bg-secondary">
                <div>{this.state.c}</div>
            </div>
            </div>
        )
    }
}
export default Counter