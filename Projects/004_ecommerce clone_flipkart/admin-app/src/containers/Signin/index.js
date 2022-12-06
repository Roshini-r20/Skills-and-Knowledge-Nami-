import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/input';

/**
* @author
* @function Signin
**/

export const Signin = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <form>
                        <Input
                                label="Email"
                                placeholder="Email"
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

export default Signin