import React from 'react';
import { Row, Col, Typography } from 'antd';
import './RepresentativeFuture.css';
import EnrollmentImage from "../../../assets/png/representative_footer.jpg";

const { Title, Paragraph } = Typography;

const RepresentativeFuture = () => {
  return (
    <div>
        <Row justify="center">
            <Col className="font-48 typo-red">FUTURE</Col>
            <Col className="font-48 typo-blue">{'\u00A0'}GOALS</Col>
            <div className="bg-represent-content">
              <div className="bg-represent-letter">
                <Row gutter={[32, 10]} justify="space-between" className="text-national">
                  <Col xs={24} md={12} className="">
                      <div className="national">
                        <h2>NATIONAL COMPETITIONS</h2>
                        <p>Continued participation in national tournaments, aiming to build
                          a reputation as a competitive force.
                        </p>
                      </div>
                  </Col>
                  <Col xs={24} md={12}>
                      <div className="international">
                          <h2>INTERNATIONAL EXPOSURE</h2>
                          <p>Plans for international tours and participation in prestigious 
                            tournaments abroad, including AAU competitions in the US.
                          </p>
                      </div>
                  </Col>
                </Row>
              </div>
            </div>
        </Row>

    </div>
  );
};

export default RepresentativeFuture;