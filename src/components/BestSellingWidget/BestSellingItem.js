import "./BestSellingItem.css";
import ProductIcon from "assets/png/ic_product.png";
import StarIcon from "assets/png/ic_star.png";
import { Col } from "antd";
import { TextButton } from "components/ButtonWidget/TextButton/TextButton";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
export const BestSellingItem = (props) => {
  const { item, onClick, className, style } = props;
  return (
    <div className="best-selling-one">
      <div className="best-selling-rect">
        <div style={{ position: "relative" }}>
          <img src={ProductIcon} className="best-selling-img" />
          <img src={StarIcon} className="star-icon" />
        </div>

        <p className="font-13 bold">{item.title}</p>
        <p className="font-13">{item.description}</p>
        <p className="font-13">
          {item.size} {item.unit}
        </p>
        <p className="font-13 blue bold">
          {item.currency} {item.price}
        </p>
        <div>
          <TextButton className="control-icon">
            <MinusOutlined />
          </TextButton>
          <span className="font-13">{item.count}</span>
          <TextButton className="control-icon">
            <PlusOutlined />
          </TextButton>
        </div>
        <div>
          <TextButton>
            <p className="font-12 blue bold">Add To Cart</p>
          </TextButton>
        </div>
      </div>
    </div>
  );
};
