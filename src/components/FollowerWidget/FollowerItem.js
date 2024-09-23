import { UserAddOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import "./FollowerItem.css";
import CustomerIcon from "assets/png/customer1.png";
export const FollowerItem = (props) => {
  const { item } = props;
  return (
    <div className="follower-item">
      <Row gutter={[16, 16]} align="middle">
        <Col flex={"60px"}>
          <div className="follower-avatar-rect">
            <img src={CustomerIcon} className="follower-avatar" />
          </div>
        </Col>
        <Col flex={"auto"}>
          <p className="font-13 bold">{item.name}</p>
          <p className="font-13">Follow</p>
        </Col>
        <Col flex={"20px"} style={{paddingRight: 20}}>
          <UserAddOutlined className="font-18"/>
        </Col>
      </Row>
    </div>
  );
};
