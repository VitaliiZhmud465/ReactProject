import React, { useState } from "react";
import { Checkbox, Col, Input, Row } from "antd";
import "./ForgotSection.css";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import { ReactComponent as lockIcon } from "../../../assets/svg/ic_lock.svg";
import Icon from "@ant-design/icons";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
const ForgotSection = (props) => {
  const [userData, setUserData] = useState({});
  const [errorField, setErrorField] = useState([]);
  const [isMail, setIsMail] = useState(true);

  const onChangeType = (e, type) => {
    if (type == "mail") {
      setIsMail(e.target.checked);
    } else {
      setIsMail(!e.target.checked);
    }
  };

  return (
    <div className="forgot-section">
      <BottomDescription
        title=""
        content1="Enter your details below to login"
      />
      <Row>
        <Col xs={0} md={8}></Col>
        <Col xs={24} md={8}>
          <div className="forgot-input-rect">
            <div className="mt-40 text-center">
              <Checkbox
                className="p-20"
                checked={isMail}
                onChange={(e) => {
                  onChangeType(e, "mail");
                }}
              >
                Email
              </Checkbox>
              <Checkbox
                className="p-20"
                checked={!isMail}
                onChange={(e) => {
                  onChangeType(e, "mobile");
                }}
              >
                Mobile
              </Checkbox>
            </div>
            <div>
              {isMail ? (
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="home-input"
                />
              ) : (
                <PhoneInput
                  international
                  defaultCountry={"ZA"}
                  style={{marginTop: 10}}
                  className={
                    errorField !== undefined &&
                    errorField.includes("phone_number")
                      ? `phone-input-error`
                      : `phone-input`
                  }
                  value={
                    userData.phone_number === undefined
                      ? ""
                      : `+${userData.country_code}${userData.phone_code}`
                  }
                  onChange={(value) => {
                    if (value === undefined) return;
                    const info = parsePhoneNumber(value);
                    if (info === undefined) return;
                    const { nationalNumber, countryCallingCode } = info;
                    setUserData({
                      ...userData,
                      country_code: countryCallingCode,
                      phone_code: nationalNumber,
                      phone_number: value,
                    });
                  }}
                />
              )}

              <Input.Password
                placeholder="Password"
                className="home-input"
                suffix={<Icon component={lockIcon} />}
              />
            </div>
            <p className="text-right mt-10">
              <a className="forgot-txt">Forgot Password</a>
            </p>
            <div className="text-center mt-10">
              <RoundButton className="blue-round">SUBMIT</RoundButton>
            </div>
            <div className="text-center mt-20 pb-30">
              <p className="font-15 bold">
                Don't have an account yet? <a className="signup-txt">Sign Up</a>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={0} md={8}></Col>
      </Row>
    </div>
  );
};

export default ForgotSection;
