import "./SearchBar.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(props) {
  const [searchNav, setSearchNav] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let searchQuerie = e.target.children[1].value;
    setSearchNav("");
    navigate(`/listings/${searchQuerie}`);
    navigate(0);
    // window.location.reload(false);
  }
  return (
    <form
      className={`searchBar ${
        props.location !== "navbar" ? "searchBar__homeSize" : ""
      }`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <i className="fa fa-search searchBar__icon"></i>
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
        className={`searchBar__submitBtn ${
          props.location === "navbar" ? "searchBar__nav" : ""
        }`}
        value="Search"
      />
    </form>
  );
}
