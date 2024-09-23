import { DiscoverItem } from "./DiscoverItem";
import CarouselWidget from "components/CarouselWidget/CarouselWidget";
export const DiscoverWidget = (props) => {
  const { dataList } = props;

  if (dataList == undefined) {
    return;
  }
  return (
    <CarouselWidget show={4}>
      {dataList.map((x, index) => {
        return <DiscoverItem key={index} item={x} />;
      })}
    </CarouselWidget>
  );
};
