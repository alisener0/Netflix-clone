import React from "react";
import { baseImgUrl } from "../constants";

const ActorCart = ({ actor }) => {
  return (
    <div className="w-[160px]">
      <img src={baseImgUrl + actor.profile_path} alt="" />
      <h2>{actor.original_name}</h2>
      <h2>{actor.character}</h2>
    </div>
  );
};

export default ActorCart;
