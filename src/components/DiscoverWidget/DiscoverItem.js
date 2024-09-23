import "./DiscoverItem.css";
import PostIcon from "assets/png/ic_add_post.png";
import PlusIcon from "assets/png/ic_plus.png";
export const DiscoverItem = (props) => {
  const { item, onClick, className, style } = props;
  return (
    <div>
      <div className="cover-rect">
        <img src={PostIcon} className="discover-img" />
        <div className="cover-gradient"></div>
        {item.id == -1 && <div className="post-plus-rect"><img src={PlusIcon} className="post-plus-img"/></div>}
        <div className="discover-title">{item.title}</div>
      </div>
    </div>
  );
};
