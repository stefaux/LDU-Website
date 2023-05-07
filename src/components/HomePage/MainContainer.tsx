import ImageSlider from "./ImageSlider";
import NavCard from "./NavCard";

function MainContainer () {
    const cardTitle1 = "Workshops";
    const cardText1 = "Find out more about our interactive workshops";
    const cardTitle2 = "What is debating?";
    const cardText2 = "Learn all about debating from passionate people";
    const cardTitle3 = "Blog";
    const cardText3 = "Stay up to date with the LDU"

    return(
        <div className="container mx-auto  ">
            <ImageSlider/>
            <div className="flex flex-row bg-gradient-to-t from-indigo-900 to-gray-900">
                <div className="basis-1/3 m-5">
                    <NavCard cardTitle={cardTitle1} cardText={cardText1}/>
                </div>
                <div className="basis-1/3 m-5">
                    <NavCard cardTitle={cardTitle2} cardText={cardText2}/>
                </div>
                <div className="basis-1/3 m-5">
                    <NavCard cardTitle={cardTitle3} cardText={cardText3}/>
                </div>
            </div>
        </div>  
    );
}

export default MainContainer;