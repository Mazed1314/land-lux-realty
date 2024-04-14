import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find((c) => c.id == id);
  const {
    facilities,
    location,
    area,
    status,
    price,
    description,
    segment_name,
    estate_title,
    image,
  } = card;
  return (
    <div className="mx-2 md:mx-20 bg-slate-50">
      <Helmet>
        <title>LandLuxe | Estate_details : {id}</title>
      </Helmet>
      <h2 className="text-center font-bold text-2xl my-6 pt-8 rounded-t-md">
        {estate_title}
      </h2>
      <div className="w-full">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="px-2 md:px-8">
        <div className="py-4 md:py-8 text-lg text-gray-600">{description}</div>
        <div className="my-4 md:flex justify-between text-xl font-bold">
          <p>
            Area : <span className="text-gray-600 font-medium">{area}</span>
          </p>
          <p>
            Price : <span className="text-gray-600 font-medium">{price}</span>
          </p>
          <p>
            Status : <span className="text-gray-600 font-medium">{status}</span>
          </p>
          <p>
            Segment :{" "}
            <span className="text-gray-600 font-medium">{segment_name}</span>
          </p>
        </div>
        <div className="pb-6 text-xl font-bold">
          <p>
            Facilities :{" "}
            <span className="text-gray-600 font-medium">
              {facilities?.[0]}, {facilities?.[1]}, {facilities?.[2]}
            </span>
          </p>
          <p>
            Location :{" "}
            <span className="text-gray-600 font-medium">{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
