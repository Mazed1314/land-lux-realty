import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Estate = () => {
  const estate = useLoaderData();
  console.log(estate);
  return (
    <>
      <h2 className="text-3xl font-bold py-8 text-center">estate</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 mb-6">
        {estate.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </>
  );
};

export default Estate;
