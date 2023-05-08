import NavCard from "./NavCard";

export default function CardContainer() {
  const cardTitle1 = "Workshops";
  const cardText1 = "Find out more about our interactive workshops";
  const cardTitle2 = "What is debating?";
  const cardText2 = "Learn all about debating from passionate people";
  const cardTitle3 = "Blog";
  const cardText3 = "Stay up to date with the LDU";

  return (
    <div className="flex flex-row ">
      <div className="basis-1/3 m-5">
        <NavCard cardTitle={cardTitle1} cardText={cardText1} />
      </div>
    </div>
  );
}
