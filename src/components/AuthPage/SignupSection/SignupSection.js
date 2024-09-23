import React, { useState } from "react";
import { Checkbox, Col, Input, Row } from "antd";
import "./SignupSection.css";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import { ReactComponent as lockIcon } from "../../../assets/svg/ic_lock.svg";
import Icon from "@ant-design/icons";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
const SignupSection = (props) => {
  const [userData, setUserData] = useState({});
  const [errorField, setErrorField] = useState([]);
  const [isSell, setIsSell] = useState(true);
  const [isMail, setIsMail] = useState(true);

  const onChange = (e, type) => {
    if (type == "sell") {
      setIsSell(e.target.checked);
    } else {
      setIsSell(!e.target.checked);
    }
  };
  const onChangeType = (e, type) => {
    if (type == "mail") {
      setIsMail(e.target.checked);
    } else {
      setIsMail(!e.target.checked);
    }
  };

  return (
    <div className="signup-section">
      <BottomDescription
        title=""
        content1="Enter your details below to sign up"
      />
      <Row>
        <Col xs={0} md={8}></Col>
        <Col xs={24} md={8}>
          <div className="signup-input-rect">
            <div className="mt-40 text-center">
              <Checkbox
                className="p-20"
                checked={isSell}
                onChange={(e) => {
                  onChange(e, "sell");
                }}
              >
                I want to Sell
              </Checkbox>
              <Checkbox
                className="p-20"
                checked={!isSell}
                onChange={(e) => {
                  onChange(e, "buy");
                }}
              >
                I want to Buy
              </Checkbox>
            </div>
            <div>
              <Input
                placeholder="Full Name"
                type="text"
                className="home-input"
              />
              <Input
                placeholder="Surname"
                type="text"
                className="home-input"
              />
            </div>
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
                  style={{ marginTop: 10 }}
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
            <div className="text-center mt-10">
              <RoundButton className="blue-round">SUBMIT</RoundButton>
            </div>
            <div className="text-center mt-20 pb-30">
              <p className="font-15 bold">
                Already have an account? <a className="signup-txt">Login</a>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={0} md={8}></Col>
      </Row>
    </div>
  );
};

export default SignupSection;
