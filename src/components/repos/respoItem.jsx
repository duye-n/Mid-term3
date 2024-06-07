import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RespoItem = (props) => {
  const { name,url } = props.repo;
  return (
    <>
      <div className="cart">
        <Link to={url}>{ name}</Link>
      </div>
    </>
  );
};
export default RespoItem;