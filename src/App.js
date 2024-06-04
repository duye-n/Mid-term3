import axios from "axios";
import { useEffect, useState } from "react";
import "./style/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/User";
import Search from "./components/users/Search"; 

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Routes>
            <Route path="/search" element={<Search />} />
           
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
