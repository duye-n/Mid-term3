import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RespoItem = (props) => {
  const { name,html_url } = props.repo;
  return (
    <>
      <div className="cart">
        <Link target="_blank" to={html_url}>{ name}</Link>
      </div>
    </>
  );
};
export default RespoItem;