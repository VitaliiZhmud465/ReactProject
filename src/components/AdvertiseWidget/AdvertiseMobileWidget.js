import React from "react";
import "./AdvertiseWidget.css";
const AdvertiseMobileWidget = (props) => {
  const { dataList } = props;
  return (
    <div className="adver-mobile-widget">
      {dataList.map((x, index) => {
        return (
          <div className="adver-mobile-one" key={index}>
            <div className="adver-mobile-rect">
              <img src={x.src} className="adver-mobile-img" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdvertiseMobileWidget;