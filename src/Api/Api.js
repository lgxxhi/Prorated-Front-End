import { useState } from "react";
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
    let servicesArray = [];
    allServices.forEach(async (serviceObj) => {
      let serviceName = serviceObj.name.toLowerCase();
      for (let queryWord of queryArray) {
        if (serviceName.includes(queryWord)) {
          let contractors = await getAllContractorsByServiceId(serviceObj.id);
          servicesArray.push(...contractors);
        }
      }
    });
    return servicesArray;
  } catch (error) {
    return error;
  }
}

export {
  getAllServices,
  getAllContractors,
  getAllContractorsByServiceId,
  getServicesResults,
};
