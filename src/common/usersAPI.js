import Axios from "./Axios";

const getSingleUser = async (id, setFn) => {
  try {
    let result = await Axios.get(`/users/${id}`);
    setFn(result.data);
  } catch (e) {
    return e;
  }
};

const updateUserById = async (id, user) => {
  try {
    let result = await Axios.put(`/users/${id}`, user);
    return result;
  } catch (e) {
    return e;
  }
};

export { getSingleUser, updateUserById };
