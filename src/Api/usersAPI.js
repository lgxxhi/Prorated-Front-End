import Axios from "../Api/axios";

const getSingleUser = async (id) => {
  try {
    let result = await Axios.get(`/users/${id}`);
    return result;
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

const fetchContractorDetails = async (id) => {
  try {
    let result = await Axios.get(`/contractors/${id}`);
    return result;
  } catch (e) {
    return e;
  }
};

export { getSingleUser, updateUserById, fetchContractorDetails };
