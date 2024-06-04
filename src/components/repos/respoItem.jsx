import React from "react";
import { Link } from "react-router-dom";

const ReposItem = (props) => {
  const {
    name,
    description,
    html_url,
    language,
    stargazers_count,
    forks_count,
  } = props.repo;

  return (
    <div className="card">
      <h3 className="repo-name">
        <Link to={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      </h3>
      <p className="repo-description">{description}</p>
      <div className="repo-details">
        <span className="repo-language">{language}</span>
        <span className="repo-stars">
          <i className="fas fa-star"></i> {stargazers_count}
        </span>
        <span className="repo-forks">
          <i className="fas fa-code-branch"></i> {forks_count}
        </span>
      </div>
    </div>
  );
};

export default ReposItem;
