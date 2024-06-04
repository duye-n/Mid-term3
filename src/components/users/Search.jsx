import React, { useState } from "react";
import axios from "axios";
import Users from "./Users";

const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [notFound, setNotFound] = useState(false); // Biến trạng thái để kiểm tra khi không tìm thấy người dùng

  const searchUsers = async (text) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      if (response.data.items.length === 0) {
        setNotFound(true); // Nếu không tìm thấy người dùng, thiết lập biến trạng thái
        setUsers([]); // Reset danh sách người dùng
      } else {
        setUsers(response.data.items);
        setNotFound(false); // Nếu tìm thấy người dùng, reset biến trạng thái
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      await searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

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
      {notFound && <p>No users found</p>}{" "}
      {/* Hiển thị thông báo khi không tìm thấy người dùng */}
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
