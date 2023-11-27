import React, { useState } from "react";
import "../Styles/Global.scss";
import { useNavigate } from "react-router-dom";

export default function SearchBar(props) {
  const searchIcon = require("../Assets/Images/search-icon.png");
  const [search, setSearch] = useState("");
  const [searchNav, setSearchNav] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let searchQuerie = e.target.children[1].value;
    setSearch("");
    setSearchNav("");
    navigate(`/listings?q=${searchQuerie}`);
    window.location.reload(false);
  }
  return (
    <form
      className={`searchBar ${
        props.location !== "navbar" ? "searchBar__homeSize" : ""
      }`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <i class="fa fa-search searchBar__icon"></i>
      <input
        type="search"
        className="searchBar__input"
        placeholder="Search..."
        value={searchNav}
        onChange={(e) => setSearchNav(e.currentTarget.value)}
        required
      />
      <input
        type="submit"
        className={`btn searchBar__submitBtn ${
          props.location === "navbar" ? "searchBar__nav" : ""
        }`}
      />
    </form>
  );
}
