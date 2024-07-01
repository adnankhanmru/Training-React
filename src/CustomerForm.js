import React, { Component } from 'react';

class CustomerForm extends Component {

 constructor() {

  super();

  this.state = {

   "id": 1001,

   "name": "Amit Kumar",

   "salary": 35000,

   "err_id": '',

   "err_name": '',

   "err_salary": '',

  }

 }

 render() {

  return (

   <div>

    <form className=' border border-x-4 border-y-4 p-5 m-5 w-50% text-pretty bg-red-500'>

     <div>

      <label>Enter ID</label>

      <input className="form-control" onChange={this.changeId}/>

      <span>{this.state.err_id}</span>

     </div>

     <div>

      <label>Enter Name</label>

      <input className="form-control" onChange={this.changeName}/>

      <span>{this.state.err_name}</span>

     </div>

     <div>

      <label>Enter Salary</label>

      <input className="form-control" onChange={this.changeSalary}/>

      <span>{this.state.err_salary}</span>

     </div>

    </form>

    <div>

     ID is {this.state.id}

    </div>

    <div>

     Name is {this.state.name}

    </div>

    <div>

     Salary is {this.state.salary}

    </div>

   </div>

  );

 }

}

CustomerForm.propTypes = {

};

export default CustomerForm;

