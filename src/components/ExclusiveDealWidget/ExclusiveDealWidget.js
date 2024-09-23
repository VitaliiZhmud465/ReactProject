import React from "react"
import { ExclusiveDealItem } from "./ExclusiveDealItem";

const ExclusiveDealWidget = (props) => {
    const { dataList } = props;

    if (dataList == undefined) {
      return;
    }
    return (
      <div className="exclusive-deal-widget">
        {dataList.map((x, index) => {
          return <ExclusiveDealItem key={index} item={x} />;
        })}
      </div>
    );
};

export default ExclusiveDealWidget;
