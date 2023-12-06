import "../../Styles/Global.scss";
import React, { useEffect, useState } from "react";
import { getAllServices } from "../../Api/Api";
import SearchBar from "../../Components/SearchBar";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [servicesObj, setServicesObj] = useState({});

  const displayServices = () => {
    return servicesObj.map(({ name, description, custom, image, id }) => {
      if (!custom) {
        return (
          <ServiceCard
            key={id}
            data={{
              name: name,
              description: description,
              custom: custom,
              image: image,
            }}
          />
        );
      } else {
        return "";
      }
    });
  };

  const fetchServices = async () => {
    try {
      const services = await getAllServices();
      console.log(services);
      setServicesObj(services);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="home-page">
      <div className="home-page__search">
        <div className="home-page__search__input">
          <h1 className="home-page__search__input__title">
            Building trust <br /> One project at a time
          </h1>
          <SearchBar location="home-page" />
          <div className="home-page__search__suggestions">
            <p>Popular services:</p>
            <button
              className="btn btn__full-round"
              onClick={() => navigate("/listings/plumbing")}
            >
              Plumbing
            </button>
            <button
              className="btn btn__medium-round"
              onClick={() => navigate("/listings/Electrician")}
            >
              Electrician
            </button>
            <button
              className="btn btn__medium-round"
              onClick={() => navigate("/listings/Handyman")}
            >
              Handyman
            </button>
          </div>
        </div>
      </div>
      <div className="home-page__popular-services">{displayServices()}</div>
    </div>
  );
}
