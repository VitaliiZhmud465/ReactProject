import "./DealsSpecialItem.css";

export const DealsSpecialItem = (props) => {
  const { item, onClick, className, style } = props;
  return (
    <div className="deal-special-one">
      <div className="deal-special-rect">
        <img src={item.logo} className="deal-special-bg-img" />
        <div className="deal-special-gradient"></div>
        <div className="deal-special-title">
          <p className="font-15 white">{item.title}</p>
          <p className="font-15 white">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
