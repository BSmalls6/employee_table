import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            department: ''
        }

        this.onChangeEmployeeFirstName = this.onChangeEmployeeFirstName.bind(this);
        this.onChangeEmployeeLastName = this.onChangeEmployeeLastName.bind(this);
        this.onChangeEmployeePhone = this.onChangeEmployeePhone.bind(this);
        this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
        this.onChangeEmployeeDepartment = this.onChangeEmployeeDepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmployeeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeEmployeeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmployeePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmployeeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeEmployeeDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Employee Name: ${this.state.firstName} ${this.state.lastName}`);
        console.log(`Employee Phone: ${this.state.phone}`);
        console.log(`Employee Email: ${this.state.email}`);
        console.log(`Employee Department: ${this.state.department}`);
        
        this.setState({
            lastName: '',
            phone: '',
            firstName: '',
            email: '',
            department: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Fiist Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeEmployeeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeEmployeeLastName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Phone Number: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangeEmployeePhone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmployeeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Department: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.department}
                                onChange={this.onChangeEmployeeDepartment}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}