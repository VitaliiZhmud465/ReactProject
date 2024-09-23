import React from "react"
import { DealsSpecialItem } from "./DealsSpecialItem";

const DealsSpecialWidget = (props) => {
    const { dataList } = props;
    if (dataList == undefined) {
      return;
    }
    return (
      <div className="deal-special-widget">
        {dataList.map((x, index) => {
          return <DealsSpecialItem key={index} item={x} />;
        })}
      </div>
    );
};

export default DealsSpecialWidget;
