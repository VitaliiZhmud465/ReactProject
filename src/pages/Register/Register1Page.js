import React from 'react';
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import { Button, Col, Input, Row, Select, message, Typography, Upload, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import "./Register1Page.css";
import ImgRegisterLogo from "../../assets/png/registerlogo.jpg"
import ImgOverlayLogo from "../../assets/png/overlay-logo.png"

const { Option } = Select;
const { Title, Text } = Typography;
const { Dragger } = Upload;

const Register1Page = () => {
    const uploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // Mock API URL for demonstration
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    };
    return (
        <HomeLayout>
            <div className='register-content'>
                <div className='register-adv'>
                    <h1>JOIN THE GAME <span>REGISTER</span> YOUR</h1>
                    <h1> INTEREST <span>NOW!</span></h1>
                    <p>Ready to showcase your skills? Whether you're aiming for the big leagues in the CBL or starting your journey in the JCBL,
                        this is your first step to becoming a part of Coastal Basketball. Register now to get started!
                    </p>

                    <button className='btn-register'>REGISTER NOW</button>
                </div>

                <div className='register-logo'>
                    <img src={ImgRegisterLogo} />
                    <div className="logo-overlay">
                        <img src={ImgOverlayLogo} alt="CBL Logo" className="center-logo" />
                    </div>
                </div>

                <div className='register-form'>
                    <div className='register-form-title'>
                        <h1>COASTAL BASKETBALL HGIH SCHOOL LEAGUE REGISTRATION FROM</h1>
                    </div>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>SCHOOL INFORMATION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Input placeholder="SCHOOL NAME" />
                                </Col>
                                <Col span={24}>
                                    <Input placeholder="ADDRESS" />
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="CITY/SUBURB" />
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="POSTAL CODE" />
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="CONTACT NUMBER" />
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="EMAIL ADDRESS" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>TEAM INFORMATION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <Input placeholder="TEAM NAME" />
                                </Col>
                                <Col span={12}>
                                    <Select placeholder="AGE GROUP" className="age-group-select">
                                        <Option value="U10">Under 10</Option>
                                        <Option value="U12">Under 12</Option>
                                        <Option value="U14">Under 14</Option>
                                        <Option value="U16">Under 16</Option>
                                    </Select>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input placeholder="NUMBER OF PLAYERS" />
                                </Col>
                                <Col  xs={24} md={12}>
                                    <Input placeholder="COACH NAME" />
                                </Col>
                                <Col  xs={24} md={12}>
                                    <Input placeholder="COACH CONTACT NUMBER" />
                                </Col>
                                <Col  xs={24} md={12}>
                                    <Input placeholder="COACH EMAIL ADDRESS" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>PLAYER DETAILS</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <div className="upload-section">
                                <Text className="upload-title">Upload Player Roster (Excel/PDF)</Text>
                                <Dragger {...uploadProps}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">CLICK TO UPLOAD OR DRAG & DROP</p>
                                </Dragger>
                                <Text className="upload-instructions">
                                    <span className="upload-instructions-title">Instructions:</span> Include player names, dates of birth, and student ID numbers.
                                </Text>
                            </div>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>CONSENT & AGREEMENT</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <div className="consent-form">
                                <h3>Consent for Use of Images and Logos</h3>
                                <p>
                                    By registering for the Coastal Basketball High School League, the school consents to the use of its logo, team, and player images in promotional materials, including the league’s website, social media, and other media. The school confirms that all necessary parental consents have been obtained for players under 18.
                                </p>
                                <div className="form-fields">
                                    <Input className="form-input" placeholder="NAME OF APPROVING SCHOOL OFFICIAL" />
                                    <Input className="form-input" placeholder="POSITION" />
                                    <Input className="form-input" placeholder="POSITION" />
                                </div>
                                <Row className="signature-section" gutter={[32, 32]}>
                                    <Col xs={24} md={12}>
                                        <Text>Signature:</Text>
                                        <Dragger className="mini-uploader"{...uploadProps}>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">UPLOAD YOUR SIGNATURE</p>
                                        </Dragger>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Text>Date:</Text>
                                        <DatePicker className="date-picker" placeholder="SELECT A DATE" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>PAYMENT INFORMATION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <div className="payment-form">
                                <h3>Registration Fee</h3>
                                <Text className="fee-description">
                                    Text information about registration fee’s amount.
                                </Text>

                                <Select className="payment-select" placeholder="PAYMENT METHOD">
                                    <Option value="credit-card">Credit Card</Option>
                                    <Option value="paypal">PayPal</Option>
                                    <Option value="bank-transfer">Bank Transfer</Option>
                                </Select>

                                <Button type="primary" className="payment-button">
                                    UPLOAD YOUR PAYMENT INFORMATION
                                </Button>

                                <Text className="payment-security-note" type="danger">
                                    YOUR PAYMENT INFORMATION IS SAFE AND SECURE WITH COASTAL BASKETBALL.
                                </Text>
                            </div>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>SUBMIT</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Button type="primary" className="submit-button">
                                SUBMIT YOUR FORM
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Register1Page;