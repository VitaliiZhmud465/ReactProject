import React from "react"
import { FeaturedStoreItem } from "./FeaturedStoreItem";

const FeaturedStoreWidget = (props) => {
    const { dataList } = props;

    if (dataList == undefined) {
      return;
    }
    return (
      <div className="featured-store-widget">
        {dataList.map((x, index) => {
          return <FeaturedStoreItem key={index} item={x} />;
        })}
      </div>
    );
};

export default FeaturedStoreWidget;
