import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form} from 'reactstrap';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        window.localStorage.setItem('user', this.state.email);
    }

    render(){
        return (
            <div className="LoginModal">
            <Modal isOpen={true} >
                <ModalHeader>Sign in to Lamba Times</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                    <Input type="email"
                        name="email"
                        placeholder="myemail@fake.com"
                        onChange={this.handleChange}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="********"
                        onChange={this.handleChange}
                    />
                    <Button type="submit" >Sign In</Button>
                    </Form>
                    
                </ModalBody>
            </Modal>
            </div>
        );
    }
}

export default Login;