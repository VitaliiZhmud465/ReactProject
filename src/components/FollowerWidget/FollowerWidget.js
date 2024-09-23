import React from "react"
import { FollowerItem } from "./FollowerItem";

const FollowerWidget = (props) => {
    const { dataList } = props
    if (dataList == undefined) return
  return <div>
    {dataList.map((x, index)=>{
        return <FollowerItem item={x} key={index}/>
    })}
  </div>;
};

export default FollowerWidget;
