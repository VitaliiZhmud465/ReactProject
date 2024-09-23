import "./FeaturedStoreItem.css";
import ProductIcon from "assets/png/ic_add_post.png";
import StoreLogo from "assets/png/store_logo.png";
export const FeaturedStoreItem = (props) => {
  const { item, onClick, className, style } = props;
  return (
    <div className="featured-store-one">
      <div className="featured-store-rect">
        <img src={ProductIcon} className="store-bg-img" />
        <div className="store-gradient"></div>
        <div className="featured-store-logo-rect">
          <img src={StoreLogo} className="featured-store-logo-img" />
        </div>
        <div className="featured-store-title">
          <p className="font-15">{item.title}</p>
          <p className="font-15">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
