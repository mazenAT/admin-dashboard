import React from 'react'
import Layout from '../../component/layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../component/Ui/Input';


const Signup = () => {
    return (
        <div>
            <Layout />
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form >
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        type="text"
                                        value=""
                                        placeholder="Enter First name" 
                                        onChange={()=>{}}
                                    />
                                </Col>
                                <Col md={6}>
                                <Input
                                        label="last Name"
                                        type="text"
                                        value=""
                                        placeholder="Enter last name"
                                        onChange={()=>{}} 
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email Address"
                                type="email"
                                value=""
                                placeholder="Enter Email"
                                onChange={()=>{}}
                            />
                            <Input
                                label="Password"
                                type="password"
                                value=""
                                placeholder="Enter Password"
                                onChange={()=>{}}
                            />
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup
