import React from 'react'
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/input';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email"
                                placeholder="email"
                                value=""
                                type="email"
                                onChange={() => { }}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                onChange={() => { }}
                            />

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )

}

export default Signup