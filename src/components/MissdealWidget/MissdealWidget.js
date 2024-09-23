import { Carousel } from "antd";
import { MissDealItem } from "./MissDealItem";
export const MissdealWidget = (props) => {
  const { dataList } = props;
  if (dataList == undefined) {
    return;
  }
  return (
    <div>
      <Carousel slidesToShow={1} slidesToScroll={1} autoplay>
        {dataList.map((x, index) => {
          return <MissDealItem key={index} item={x} />;
        })}
      </Carousel>
    </div>
  );
};
