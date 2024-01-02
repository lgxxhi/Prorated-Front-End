import "./SearchBar.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchNav, setSearchNav] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchNav("");
    navigate(`/listings/${searchNav}`);
    navigate(0);
  }
  return (
    <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        className="searchBar__input"
        placeholder="Search..."
        value={searchNav}
        onChange={(e) => setSearchNav(e.currentTarget.value)}
        required
      />
      <button
        type="submit"
        className="searchBar__submitBtn"
        onSubmit={(e) => handleSubmit(e)}
      >
        <i className="fa fa-search searchBar__submitBtn__icon"></i>
      </button>
    </form>
  );
}
