import React from "react";
import RespoItem from "../repos/respoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      <h2>Repositories</h2>
        {repos.map((item) => (
          <RespoItem key={item.id} repo={item} />
        ))}
    </div>
  );
};

export default Repos;
