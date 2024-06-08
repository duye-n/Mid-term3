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