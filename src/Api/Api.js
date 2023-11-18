import Axios from "./axios";

async function getAllServices() {
  try {
    const allServices = await Axios.get("/services");
    return allServices.data;
  } catch (error) {
    return error;
  }
}

export { getAllServices };
