import React from "react";
import "./AdvertiseWidget.css";
const AdvertiseWidget = (props) => {
  const { dataList } = props;
  return <div>
    {dataList.map((x, index) => {
      return (
        <div className="adver-widget" key={index}>
          <img src={x.src} className="adver-img" />
        </div>
      );
    })}
    ;
  </div>;
};

export default AdvertiseWidget;
