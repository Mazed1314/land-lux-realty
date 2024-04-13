import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  const {
    image,
    estate_title,
    status,
    price,
    area,
    description,
    segment_name,
    id,
  } = card;

  return (
    <div className="rounded-md md:w-96 bg-base-100 shadow-xl border relative">
      <figure className="p-4 ">
        <img
          className="rounded-t-md w-full h-[150px] md:h-[200px]"
          src={image}
          alt="Image"
        />
      </figure>
      <div className="card-body pt-0">
        <small>
          <div
            // style={{ background: "rgba(255, 255, 255, 0.9)" }}
            className="border bg-orange-500 text-white absolute -rotate-45 top-4 left-1 p-2 rounded"
          >
            <div className="font-bold text-md">{price}</div>
            <div className="text-center text-bold">
              for <span className="font-bold">{status}</span>
            </div>
          </div>
        </small>
        <div className="">
          <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <p className=" rounded-3xl font-medium text-lg">{segment_name}</p>
          <p className="font-semibold text-lg  rounded-3xl">
            Area :{" "}
            <span className="text-slate-600 font-medium text-md">{area}</span>
          </p>
        </div>
        <div className="card-actions justify-between text-gray-600">
          <p>
            {description.slice(0, description.indexOf("."))}...
            <NavLink
              className={"font-bold text-black"}
              to={`/estate-details/${id}`}
            >
              View Details
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
