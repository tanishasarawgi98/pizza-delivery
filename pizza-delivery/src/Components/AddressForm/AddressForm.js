import React , { Component } from 'react';

import './AddressForm.css';


export default class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address1: "",
            address2: "",
            city: "",
            pincode: "",
            state: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                           placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="address1">Address 1</label>
                    <input type="text" className="form-control" id="address1"
                           placeholder="Enter address 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" className="form-control" id="address2"
                           placeholder="Enter address 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city"
                           placeholder="Enter city" />
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="number" className="form-control" id="pincode"
                           placeholder="Enter pincode" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" className="form-control" id="state"
                           placeholder="Enter State" />
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address 2</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
