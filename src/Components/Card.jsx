import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  const { image, estate_title, status, price, description, segment_name } =
    card;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl border relative">
      <figure className="p-4 ">
        <img
          className="rounded-t-lg w-full h-[150px] md:h-[200px]"
          src={image}
          alt="Image"
        />
      </figure>
      <div className="card-body pt-0">
        <small>
          <div
            style={{ background: "rgba(255, 255, 255, 0.9)" }}
            className="border border-sky-300 absolute -rotate-45 top-4 left-1 p-2 rounded text-black"
          >
            <div className="font-bold text-md">{price}</div>
            <div className="text-center text-bold">
              for <span className="font-bold">{status}</span>
            </div>
          </div>
        </small>
        <div className="">
          <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
          <p className="text-slate-500 font-medium text-md">{segment_name}</p>
        </div>
        <div className="card-actions justify-between">
          <p>
            {description.slice(0, description.indexOf("."))}...
            <NavLink className={"font-bold"} to="/estate/detail">
              View Details
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
