import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import "./ExclusiveDealItem.css";
export const ExclusiveDealItem = (props) => {
  const { item, onClick, className, style } = props;
  return (
    <div className="exclusive-deal-one">
      <div className="exclusive-deal-rect">
        <div className="exclusive-deal-time-left">
          {item.left_time} left
        </div>
        <img src={item.logo} className="exclusive-deal-logo-img" />
        <div className="exclusive-deal-price">
          <p className="font-18 bold blue">{item.currency}{item.price}</p>
          <p className="font-16">Was <span className="exclusive-deal-old-price">{item.currency}{item.old_price}</span></p>
        </div>
        <div className="exclusive-deal-title">{item.description}</div>
        <div className="mt-20">
          <RoundButton className="rectangle-button">Add To Cart</RoundButton>
        </div>
      </div>
    </div>
  );
};
