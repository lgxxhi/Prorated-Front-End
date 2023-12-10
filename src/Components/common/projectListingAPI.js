import Axios from "./Axios";

const getUserListings = async (id, setFn) => {
  try {
    let result = await Axios.get(`/users/${id}/listings/all`);
    setFn(result.data);
  } catch (e) {
    return e;
  }
};

const getActiveUserListings = async (id, setFn) => {
  try {
    let result = await Axios.get(`/users/${id}/listings/all/active`);
    setFn(result.data);
  } catch (e) {
    return e;
  }
};

const getCompletedUserListings = async (id, setFn) => {
  try {
    let result = await Axios.get(`/users/${id}/listings/all/completed`);
    setFn(result.data);
  } catch (e) {
    return e;
  }
};

export { getUserListings, getActiveUserListings, getCompletedUserListings };
