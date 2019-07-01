import React, { FC } from 'react'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Form from 'antd/es/form';
import Button from 'antd/es/button';
import Icon from 'antd/es/icon';
import Input from 'antd/es/input';
import Checkbox from 'antd/es/checkbox'

// components
import Header from '../Layout/Header'

interface IProps {}


const SingIn: FC<IProps> = () => {

    const singIn = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        let path = `home`;
        window.location.pathname = path;
    }

    const extra = 
        <>
            <Button onClick={() => window.location.pathname = 'signin'} type="primary" htmlType="submit">
                Sign In
            </Button>
            <Button onClick={() => window.location.pathname = 'signup'} type="primary" htmlType="submit">
                Sign Up
            </Button>
        </>

    return (
		<div className='container'>
            <Header extra={extra} subTitle="" />
            <Row>
                <Col push={8}>
                    <Form style={{maxWidth: "300px"}}>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Checkbox>Remember me</Checkbox>
                                <a style={{float: "right"}} href="forgot">
                                    Forgot password
                                </a>
                            </Row>
                            <Row>
                                <Button style={{width: '100%'}} onClick={singIn} type="primary" htmlType="submit">
                                    Sign In
                                </Button>
                            </Row>
                            Or <a href="/signup">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default SingIn
