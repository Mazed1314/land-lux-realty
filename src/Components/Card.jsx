import { NavLink } from "react-router-dom";
import "animate.css";
import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { image, estate_title, status, area, description, id } = card;

  return (
    <div className="rounded-md md:w-96 bg-base-100 shadow-xl border border-sky-200 animate__duration-2s animate__animated animate__slideInUp">
      <figure className="p-4 ">
        <img
          className="rounded-t-md w-full h-[150px] md:h-[200px]"
          src={image}
          alt="Image"
        />
      </figure>
      <div className="card-body pt-0">
        <div className="">
          <h2 className="card-title font-bold text-2xl animate__delay-1s animate__animated animate__heartBeat">
            {estate_title}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex font-semibold text-lg rounded-3xl space-x-1">
            <div className=" font-semibold text-xl animate__delay-1s animate__animated animate__bounceInDown">
              {area}
            </div>

            <div className="text-slate-600 font-normal">acres</div>
          </p>
          <p className="rounded-3xl text-lg">
            for <span className="font-semibold text-xl"> {status}</span>
          </p>
        </div>
        <div className="card-actions justify-between text-gray-600">
          <p>{description.slice(0, description.indexOf("."))}...</p>
        </div>
        <div className="flex justify-center">
          <NavLink
            className={
              "mt-4 bg-transparent border-sky-400 text-center rounded-md text-sky-400 btn text-md md:text-lg btn-sm font-normal hover:bg-sky-400 hover:text-white animate__delay-2s animate__animated animate__flipInX "
            }
            to={`/estate-details/${id}`}
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
