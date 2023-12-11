import Axios from "./axios";

async function getAllServices() {
  try {
    const allServices = await Axios.get("/services");
    return allServices.data;
  } catch (error) {
    return error;
  }
}

async function getAllContractors() {
  try {
    const allContractors = await Axios.get("/contractors");
    return allContractors.data;
  } catch (error) {
    return error;
  }
}

async function getAllContractorsByServiceId(serviceId) {
  try {
    const allContractors = await Axios.get(`/contractors/service/${serviceId}`);
    return allContractors.data;
  } catch (error) {
    return error;
  }
}

async function getServicesResults(query) {
  try {
    let queryArray = query.toLowerCase().split(" ");
    let allServices = await getAllServices();
    let allContractors = await getAllContractors();
    let results = [];

    for (let serviceObj of allServices) {
      let serviceName = serviceObj.name.toLowerCase();
      for (let queryWord of queryArray) {
        if (serviceName.includes(queryWord.toLowerCase())) {
          let contractors = await getAllContractorsByServiceId(serviceObj.id);
          results.push(...contractors);
        }
      }
    }

    for (let contractorObj of allContractors) {
      let contractorName = contractorObj.name.toLowerCase();
      for (let queryWord of queryArray) {
        if (contractorName.includes(queryWord.toLowerCase())) {
          results.push(contractorObj);
        }
      }
    }

    return results;
  } catch (error) {
    return error;
  }
}

async function createUser(user) {
  try {
    const newUser = await Axios.post("/users", user);

    return newUser.data;
  } catch (error) {
    return error;
  }
}

async function fetchUserInfo(email) {
  try {
    const user = await Axios.post("/users/login", {
      email: email,
    });

    return user.data;
  } catch (error) {
    return error;
  }
}

export {
  getAllServices,
  getAllContractors,
  getAllContractorsByServiceId,
  getServicesResults,
  fetchUserInfo,
  createUser,
};
