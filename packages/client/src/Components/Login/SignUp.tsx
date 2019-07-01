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


const SingUp: FC<IProps> = () => {

    const singUp = (event: React.FormEvent<HTMLElement>) => {
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
                        <Form.Item label="E-mail">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>
                            I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={singUp} type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default SingUp
