import { Button, Col, Row } from "antd";
import './HomeFeature.css'

const HomeFeature = (props) => {
    const { style, content, btnTitle, bgBtn } = props;
    return (
        <div style={style}>
          <Row gutter={[16]} align="middle" className="feature-content">
            <Col>
              <p className="font-24 bold white text-center">{content}</p>
            </Col>
            <Col>
              <div
                style={{
                  padding:'9px !important',
                  border:'1px solid white'
                }}
              >
                <Button style={{ backgroundColor: bgBtn }} className="btn-feature">
                  {btnTitle}
                </Button>
              </div>
            </Col>
          </Row>
        </div>
    )
}

export default HomeFeature;