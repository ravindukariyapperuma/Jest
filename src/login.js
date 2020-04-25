import React from 'react';

export class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <form className="login">
                <lable>Username</lable>
                <input id='email' onChange={this.handleInputChange} name='email' type='text' />
                <lable>Password</lable>
                <input id='password' onChange={this.handleInputChange} name='password' type='password' />
                <button>Submit</button>
            </form>
        )
    }
}

export default Login
