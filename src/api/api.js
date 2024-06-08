import axios from "axios"; 

const getUsers = async(username) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        return res.data;
    } catch (error) {
        console.error("Fail to get data: ",error);
    }
}
export default getUsers;



const BASE_URL = 'https://api.github.com';

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error.message);
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repos:', error.message);
    throw error;
  }
};

export const searchUsers = async (text) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error searching users:", error.message);
    throw error;
  }
};
