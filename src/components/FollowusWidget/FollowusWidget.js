import { CircleImageButton } from "components/ButtonWidget/CircleImageButton/CircleImageButton";
import "./FollowusWidget.css";
import IconFc from "assets/png/ic_facebook.png";
import IconTw from "assets/png/ic_twitter.png";
import IconIn from "assets/png/ic_instagram.png";
export const FollowusWidget = (props) => {
  return (
    <div>
      <CircleImageButton src={IconFc} imageStyle={{ width: 10 }} className="social-circle-rect"/>
      <CircleImageButton src={IconTw} className="social-circle-rect" />
      <CircleImageButton src={IconIn} className="social-circle-rect" />
    </div>
  );
};
