import "../../Styles/Global.scss";
import React, { useEffect, useState } from "react";
import { getAllServices } from "../../Api/Api";
import SearchBar from "../../Components/SearchBar";
import ServiceCard from "./ServiceCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [servicesObj, setServicesObj] = useState({});

  const displayServices = () => {
    return servicesObj.map(({ name, description, custom, image }) => {
      if (!custom) {
        return (
          <>
            <ServiceCard
              data={{
                name: name,
                description: description,
                custom: custom,
                image: image,
              }}
            />
          </>
        );
      } else {
        return "";
      }
    });
  };

  const fetchServices = async () => {
    try {
      const services = await getAllServices();
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
          <h1>
            Building trust <br /> One project at a time
          </h1>
          <SearchBar location="home-page" />
          <div className="home-page__search__suggestions">
            <p>Popular services:</p>
            <button className="btn btn__full-round">Plumbing</button>
            <button className="btn btn__medium-round">Electrician</button>
            <button className="btn btn__medium-round">Handyman</button>
          </div>
        </div>
      </div>
      <div className="home-page__popular-services">{displayServices()}</div>
    </div>
  );
}