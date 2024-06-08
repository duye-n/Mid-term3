// Search.js
import axios from "axios";
import React, { useContext } from "react";
import Users from "./Users";
import SearchContext from "../../SearchContext";

const Search = () => {
  const { text, setText, users, setUsers } = useContext(SearchContext);

  const searchUsers = async (text) => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  const clearUsers = () => {
    setUsers([]);
    setText('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search;
