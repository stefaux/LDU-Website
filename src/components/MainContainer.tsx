import ImageSlider from "./ImageSlider";
import NavCard from "./NavCard";

function MainContainer () {
    return(
        <div className="container mx-auto ">
            <ImageSlider/>
            <div className="flex flex-row">
                <div className="basis-1/3 m-5">
                    <NavCard/>
                </div>
                <div className="basis-1/3 m-5">
                    <NavCard/>
                </div>
                <div className="basis-1/3 m-5">
                    <NavCard/>
                </div>
            </div>
        </div>  
    );
}

export default MainContainer;