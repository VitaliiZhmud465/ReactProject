import { Col, Row } from "antd";
import React from "react";
import "./LegalDesc.css";
import Icon1 from "../../../assets/png/feature1.png";
import Icon2 from "../../../assets/png/feature4.png";
import Icon3 from "../../../assets/png/feature5.png";
import Icon4 from "../../../assets/png/feature2.png";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { CircleImageButton } from "components/ButtonWidget/CircleImageButton/CircleImageButton";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
const LegalDesc = (props) => {
  return (
    <div className="legal-brand">
      <BottomDescription
        title="CLICK TO DOWNLOAD OR VIEW"
        content1="For any concerns or queries around"
        content2="use, privacy and information"
      />
      <div className="legal-term-rect">
        <Row className="mt-60" justify="space-between" gutter={[32, 32]}>
          <Col>
            <div className="legal-blue-rect">
              <p>Terms of</p>
              <p>Use</p>
            </div>
          </Col>
          <Col>
            <div className="legal-blue-rect">
              <p>PAIA</p>
              <p>Manual</p>
            </div>
          </Col>
          <Col>
            <div className="legal-blue-rect">
              <p>Privacy</p>
              <p>Policy</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LegalDesc;
