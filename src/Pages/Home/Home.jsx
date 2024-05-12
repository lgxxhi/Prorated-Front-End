import "./Home.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useServices } from "../../hooks/useServices";
import { ServiceCard } from "./ServiceCard";
import { Services } from "./Services";
import { SearchBar } from "../../Components/Searchbar/SearchBar";

export default function Home() {
  const { services, loading } = useServices();
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <h1>
        Building trust <br /> One project at a time
      </h1>
      <SearchBar location="home-page" />
      <article className="home-page__search__suggestions">
        <p>Popular services:</p>
        <a href="/listings/Plumber">Plumbing</a>
        <a href="/listings/Electrician">Electrician</a>
        <a href="/listings/Handyman">Handyman</a>
      </article>
      <Services data={services} loading={loading}>
        {(data) => (
          <ServiceCard key={data.id} data={data} navigate={navigate} />
        )}
      </Services>
    </main>
  );
}
