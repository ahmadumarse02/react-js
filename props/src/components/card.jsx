import React from "react";

const Card = (props) => {
  return (
    <div className="border border-slate-400 rounded-md p-4 max-w-[300px] shadow-md">
      <img src={props.image} alt="Card" className="w-[100%] h-auto rounded-md" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export default Card;
