import CardContainer from "./CardContainer";
import ImageSlider from "./ImageSlider";
import NavCard from "./NavCard";
import Tabs from "./Tabs";

function MainContainer() {
  return (
    <div className="container mx-auto">
      <ImageSlider />
      <div className="bg-gradient-to-t from-indigo-900 to-gray-900">
        <CardContainer />
        <div className="flex flex-row w-full">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
