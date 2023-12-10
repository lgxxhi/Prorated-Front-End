import React, { useState, useEffect } from "react";
import "./ProjectListings.css";

import {
  getUserListings,
  getActiveUserListings,
  getCompletedUserListings,
} from "../common/projectListingAPI";

function ProjectListings({ userId }) {
  const [userListings, setUserListings] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [allListingVis, setAllListingVis] = useState(true);
  const [currentListingVis, setCurrentListingVis] = useState(false);
  const [completeListingVis, setCompleteListingVis] = useState(false);

  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        await getUserListings(userId, setUserListings);
        await getActiveUserListings(userId, setActive);
        await getCompletedUserListings(userId, setCompleted);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserListings();
    getActiveUserListings();
    getCompletedUserListings();
  }, [userId]);

  const handleAllClick = () => {
    setAllListingVis(!allListingVis);
    setCurrentListingVis(false);
    setCompleteListingVis(false);
  };

  const handleCurrentClick = () => {
    setAllListingVis(false);
    setCurrentListingVis(!currentListingVis);
    setCompleteListingVis(false);
  };

  const handleCompleteClick = () => {
    setAllListingVis(false);
    setCurrentListingVis(false);
    setCompleteListingVis(!completeListingVis);
  };

  return (
    <div className="listingsDiv">
      <h3 className="listingsH3">Project Listings</h3>
      <div className="buttons">
        <button className="all" onClick={handleAllClick}>
          All
        </button>
        <button className="current" onClick={handleCurrentClick}>
          Current
        </button>
        <button className="complete" onClick={handleCompleteClick}>
          Complete
        </button>
      </div>
      {allListingVis && (
        <div className="allListings">
          {userListings.map(({ id, title, summary }) => {
            return (
              <ul>
                <li key={id}>
                  {title} - <span>{summary}</span>
                </li>
              </ul>
            );
          })}
        </div>
      )}
      {currentListingVis && (
        <div className="currentListings">
          {active.map(({ id, title, summary }) => {
            return (
              <ul>
                <li key={id}>
                  {title} - <span>{summary}</span>
                </li>
              </ul>
            );
          })}
        </div>
      )}{" "}
      {completeListingVis && (
        <div className="completeListings">
          {completed.map(({ id, title, summary }) => {
            return (
              <ul>
                <li key={id}>
                  {title} - <span>{summary}</span>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProjectListings;
