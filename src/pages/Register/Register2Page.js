import React, { useState } from 'react';
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import { Button, Col, Input, Row, Select, message, Typography, Upload, DatePicker, Radio, Checkbox } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import "./Register1Page.css";
import ImgRegisterLogo from "../../assets/png/register-logo2.jpg"

const { Option } = Select;
const { Title, Text } = Typography;
const { Dragger } = Upload;

const Register1Page = () => {

    const [value, setValue] = useState('school-team');
    const [positionValue, setPositionValue] = useState('point-guard');
    const [handValue, setHandValue] = useState('left');
    const [medicalValue, setMedicalValue] = useState('no');
    const [consentValue, setConsentValue] = useState('yes');
    const [liabilityValue, setLiabilityValue] = useState('no');
    const [registerValue, setRegisterValue] = useState('cbl');
    const [trainValue, setTrainValue] = useState('both');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onChange1 = (e) => {
        setPositionValue(e.target.value);
    }

    const onChange2 = (e) => {
        setHandValue(e.target.value);
    }

    const onChange3 = (e) => {
        setMedicalValue(e.target.value);
    }

    const onChange4 = (e) => {
        setConsentValue(e.target.value);
    }

    const onChange5 = (e) => {
        setLiabilityValue(e.target.value);
    }

    const onChange6 = (e) => {
        setRegisterValue(e.target.value);
    }

    const onChange7 = (e) => {
        setTrainValue(e.target.value);
    }

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

                <div className='register2-logo'>
                    <img src={ImgRegisterLogo} />
                </div>

                <div className='register-form'>
                    <div className='register-form-title'>
                        <h1>COASTAL BASKETBALL LEAGUE(CBL)& JUNIOR COASTAL BASKETBALL LEAGUE(JCBL) REGISTRATION FROM</h1>
                    </div>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>PERSONAL INFORMATION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <Input placeholder="FULL NAME" />
                                </Col>
                                <Col xs={24} md={12}>
                                    <DatePicker placeholder="DATE OF BIRTH" style={{ width: '100%' }} />
                                </Col>

                                <Col xs={24} md={12}>
                                    <Select placeholder="GENDER" style={{ width: '100%' }}>
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                        <Option value="other">Other</Option>
                                    </Select>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input placeholder="EMAIL ADDRESS" />
                                </Col>


                                <Col xs={24} md={12}>
                                    <Input placeholder="PHONE NUMBER" />
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input placeholder="ADDRESS" />
                                </Col>

                                <Col xs={24} md={12}>
                                    <Input placeholder="CITY/SUBURB" />
                                </Col>
                                <Col xs={24} md={12}>
                                    <Input placeholder="POSTAL CODE" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>EMERGENCY CONTACT INFORMATION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Row gutter={[16, 16]}>


                                <Col xs={24} md={12}>
                                    <Input placeholder="EMERGENCY CONTACT NAME" />
                                </Col>
                                <Col xs={24} md={12}>
                                    <Select placeholder="RELATIONSHIP" style={{ width: '100%' }}>
                                        <Option value="parent">Parent</Option>
                                        <Option value="guardian">Guardian</Option>
                                        <Option value="sibling">Sibling</Option>
                                        <Option value="other">Other</Option>
                                    </Select>
                                </Col>

                                <Col xs={24} md={24}>
                                    <Input placeholder="EMERGENCY CONTACT PHONE NUMBER" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>BASKETBALL EXPERIENCE</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Col xs={24} md={24}>
                                <h3>Highest Level of Competition Played:</h3>
                            </Col>
                            <Radio.Group onChange={onChange} value={value} className="custom-radio-group">
                                <Row gutter={[16, 16]}>
                                    <Col span={12}>
                                        <Radio.Button value="school-team">SCHOOL TEAM</Radio.Button>
                                    </Col>
                                    <Col span={12}>
                                        <Radio.Button value="local-club">LOCAL CLUB/ASSOCIATION</Radio.Button>
                                    </Col>
                                    <Col span={12}>
                                        <Radio.Button value="state-level">STATE LEVEL</Radio.Button>
                                    </Col>
                                    <Col span={12}>
                                        <Radio.Button value="national-level">NATIONAL LEVEL</Radio.Button>
                                    </Col>
                                    <Col span={24}>
                                        <Radio.Button value="other">OTHER (PLEASE SPECIFY)</Radio.Button>
                                    </Col>
                                </Row>
                            </Radio.Group>

                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <h3>Previous Teams/Clubs</h3>
                                    <Input placeholder="ADD YOUR TEAM" />
                                </Col>

                                <Col xs={24} md={12}>
                                    <h3>Years of Experience</h3>
                                    <Select placeholder="SELECT" style={{ width: '100%' }}>
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                    </Select>
                                </Col>
                            </Row>

                            <Row className='row-padding-top'>
                                <Col xs={24} md={24}>
                                    <h3>Preffered Playing Position(s):</h3>
                                </Col>
                                <Radio.Group onChange={onChange1} value={positionValue} className="custom-radio-group">
                                    <Row gutter={[16, 16]}>
                                        <Col span={12}>
                                            <Radio.Button value="point-guard">POINT GUARD(PG)</Radio.Button>
                                        </Col>
                                        <Col span={12}>
                                            <Radio.Button value="shooting-guard">SHOOTING GUARD(SG)</Radio.Button>
                                        </Col>
                                        <Col span={12}>
                                            <Radio.Button value="small-forwawrd">SMALL FORWARD(SF)</Radio.Button>
                                        </Col>
                                        <Col span={12}>
                                            <Radio.Button value="power-forward">POWER FORWARD(PF)</Radio.Button>
                                        </Col>
                                        <Col span={24}>
                                            <Radio.Button value="center">CENTER(C)</Radio.Button>
                                        </Col>
                                    </Row>
                                </Radio.Group>
                            </Row>

                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <h3>Height(cm):</h3>
                                    <Select placeholder="YOUR HEIGHT" style={{ width: '100%' }}>
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                    </Select>
                                </Col>

                                <Col xs={24} md={12}>
                                    <Col xs={24} md={24}>
                                        <h3>Dominant Hand</h3>
                                    </Col>
                                    <Radio.Group onChange={onChange2} value={handValue} className="custom-radio-group" style={{ "width": "100%" }}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={12}>
                                                <Radio.Button value="right">RIGHT</Radio.Button>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <Radio.Button value="left">LEFT</Radio.Button>
                                            </Col>
                                        </Row>
                                    </Radio.Group>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>MEDIAL INFORMATION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Col xs={24} md={24}>
                                <h3>Any Medical Conditions or Allergies: </h3>
                            </Col>
                            <Radio.Group onChange={onChange3} value={medicalValue} className="custom-radio-group" style={{ "width": "100%", "marginBottom": "20px" }}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="no">NO</Radio.Button>
                                    </Col>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="yes">YES(PLEASE SPECIFY)</Radio.Button>
                                    </Col>
                                </Row>
                            </Radio.Group>
                            <Col xs={24} md={24}>
                                <h3>Medications Currently Taking: </h3>
                            </Col>
                            <Col xs={24} md={24}>
                                <Input placeholder="PLEASE PROVIDE YOUR MEDICAL TAKING" />
                            </Col>
                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>CONSENT & AGREEMENT</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Col xs={24} md={24}>
                                <h3>Photography/Videography Consent: </h3>
                            </Col>
                            <Radio.Group onChange={onChange4} value={consentValue} className="custom-radio-group" style={{ "width": "100%", "marginBottom": "20px" }}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="yes">I CONSENT TO COASTAL BASKETBALL USING PHOTOS OR VIDEOS OF ME/MY CHILD FOR PROMOTIONAL PURPOSES.</Radio.Button>
                                    </Col>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="no">I DO NOT CONSENT</Radio.Button>
                                    </Col>
                                </Row>
                            </Radio.Group>

                            <Col xs={24} md={24}>
                                <h3>Wavier and Release of Liability: </h3>
                            </Col>
                            <Radio.Group onChange={onChange5} value={liabilityValue} className="custom-radio-group" style={{ "width": "100%", "marginBottom": "20px" }}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="yes" style={{ lineHeight: 1.2, paddingRight: "100px" }}>I AGREE TO THE TERMS AND CONDITIONS OF PARTICIPATION, INCLUDING THE WAVIER AND RELEASE OF LIABILITY.
                                            (A LINK TO DETAILED TERMS SHOULD BE PROVIDED.)
                                        </Radio.Button>
                                    </Col>
                                </Row>
                            </Radio.Group>

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

                        </Col>
                    </Row>

                    <Row className='register-form-row' gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <h2>LEAGUE RESTRICTION</h2>
                        </Col>
                        <Col xs={24} md={18}>
                            <Col xs={24} md={24}>
                                <h3>Registering For: </h3>
                            </Col>
                            <Radio.Group onChange={onChange6} value={registerValue} className="custom-radio-group" style={{ "width": "100%", "marginBottom": "20px" }}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="cbl">COASTAL BASKETBALL LEAGUE(CBL)</Radio.Button>
                                    </Col>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="jcbl" className="custom-radio-with-list">
                                            <div>
                                                <span>JUNIOR COASTAL BASKETBALL LEAGUE (JCBL)</span>
                                                <ul>
                                                    <li>YEAR 9/10</li>
                                                    <li>YEAR 11/12</li>
                                                </ul>
                                            </div>
                                        </Radio.Button>
                                    </Col>
                                </Row>
                            </Radio.Group>

                            <Col xs={24} md={24}>
                                <h3>Available for Training/Matches: </h3>
                            </Col>
                            <Radio.Group onChange={onChange7} value={trainValue} className="custom-radio-group" style={{ "width": "100%", "marginBottom": "20px" }}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Radio.Button value="weekends">WEEKENDS</Radio.Button>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Radio.Button value="weekdays">WEEKDAYS(EVENINGS)</Radio.Button>
                                    </Col>
                                    <Col xs={24} md={24}>
                                        <Radio.Button value="both">BOTH</Radio.Button>
                                    </Col>
                                </Row>
                            </Radio.Group>
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