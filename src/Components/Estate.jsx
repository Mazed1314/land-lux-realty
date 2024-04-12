import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Estate = () => {
  const estate = useLoaderData();
  console.log(estate);
  return (
    <>
      <h2 className="text-3xl font-bold py-8 text-center text-gray-800">
        ESTATE
      </h2>
      <div className="flex justify-center">
        <p className="px-2 md:w-10/12 text-center text-lg text-gray-700 pb-4">
          Welcome to the epitome of luxury living at Land Luxe Realty's
          "Exclusive Estates" section. Explore a curated collection of premium
          properties that embody sophistication, elegance, and unparalleled
          quality. From sprawling mansions nestled in picturesque landscapes to
          chic urban penthouses boasting breathtaking city views, our selection
          caters to the most discerning clientele. Discover your dream home and
          indulge in the opulent lifestyle you deserve with Land Luxe Realty's
          Exclusive Estates.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 mb-6">
        {estate.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </>
  );
};

export default Estate;
