import "./MissDealItem.css";
import BackImg from "assets/png/bk_missdeal.png";
import SlideBottomImg from "assets/png/slide_bottom.png";
import StoreLogo from "assets/png/store_logo.png";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
export const MissDealItem = (props) => {
  const { item, onClick, className, style } = props;
  return (
    <div>
      <div className="deal-cover-rect">
        <img src={BackImg} className="deal-background-img" />
        <div className="deal-left-info">
          <img src={StoreLogo} className="deal-logo-img" />
          <div className="deal-title">{item.title}</div>
          <div className="deal-desc">{item.description}</div>
        </div>
        <div className="deal-right-info">
          <RoundButton className="green-round">Shop Now</RoundButton>
        </div>
      </div>
    </div>
  );
};
