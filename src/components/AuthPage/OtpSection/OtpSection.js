import React, { useState, useRef } from "react";
import { Checkbox, Col, Input, message, Row } from "antd";
import "./OtpSection.css";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import { ReactComponent as lockIcon } from "../../../assets/svg/ic_lock.svg";
import Icon from "@ant-design/icons";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
import ReactCodeInput from "react-code-input";
const OtpSection = (props) => {
  const [isWrong, setIsWrong] = useState(false);
  const verifyButtonRef = useRef(null);
  const [code, setCode] = useState("");

  const onChangeCode = (value) => {
    setCode(value);
    if (isWrong === true) {
      setIsWrong(false);
    }
    if (value.length === 6) {
      verifyButtonRef.current.focus();
    }
  };
  const onClickVerification = () => {
    if (code.length !== 6) {
      message.error("Please input 6 digit code.");
      setIsWrong(true);
      return;
    }
   
  };
  return (
    <div className="otp-section">
      <BottomDescription
        title=""
        content1="Enter your 6 digit OTP that was sent to *** *** 2353 below"
      />
      <Row>
        <Col xs={0} md={8}></Col>
        <Col xs={24} md={8}>
          <div className="otp-input-rect">
            <div className="activation-code-input">
              <ReactCodeInput
                value={code}
                isValid={!isWrong}
                fields={6}
                onChange={onChangeCode}
              />
            </div>
            <p className="text-center mt-40 font-15 text-italic">
              Didn't get it?
              <a className="otp-txt ml-10">Resend</a>
            </p>
            <div className="text-center mt-10">
              <button
                className="round-button-rect blue-round"
                onClick={onClickVerification}
                ref={verifyButtonRef}
              >
                SUBMIT
              </button>
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

export default OtpSection;
