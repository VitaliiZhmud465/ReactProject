import React from "react"
import { BestSellingItem } from "./BestSellingItem";

const BestSellingWidget = (props) => {
    const { dataList } = props;

    if (dataList == undefined) {
      return;
    }
    return (
      <div className="best-selling-widget">
        {dataList.map((x, index) => {
          return <BestSellingItem key={index} item={x} />;
        })}
      </div>
    );
};

export default BestSellingWidget;
