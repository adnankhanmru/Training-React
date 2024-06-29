import React, { Component } from "react"
class Customer extends Component{
    constructor(){
        super();
        this.state={
            "id":10001,
            "name":"Amit Kumar",
            "age":20,
        }
    }

    customerChange=()=>{
        this.setState(
            {
                "id":766765,
                "name":"harsh",
                "age":45
            }
        )
    }
    
    
    
    
    render(){
        return(
            <div className="container p-5 w-50 m-5 border border-info bg-dark text-light" style={{"textAlign":"left"}}>
                <h1>Customer Component</h1>
                <div>
                    Id is {this.state.id}
                </div>
                <div>
                    Name is {this.state.name}
                </div>
                <div>
                    Age is {this.state.age}
                </div>
                <div>
                    <button type="button" onClick={this.customerChange} class="btn btn-outline-light">Change Customer</button>
                </div>
            </div>
        )
    }
}

export default Customer